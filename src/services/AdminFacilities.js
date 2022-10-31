import axios from "axios";

const API_BASE_URL_FACILITIES = "http://localhost:8080/api/admin/v1";

// SERVICE API KEYS
export function GetAllServices() {
  return axios.get(API_BASE_URL_FACILITIES + "/services");
}
export function GetService(id) {
  return axios.get(API_BASE_URL_FACILITIES + `/services/${id}`);
}
export function UpdateServiceAPI(id, service) {
  console.log(id + " " + service);
  return axios.put(API_BASE_URL_FACILITIES + `/services/update/${id}`, service);
}
export function DeleteServiceAPI(id) {
  return axios.delete(API_BASE_URL_FACILITIES + `/services/delete/${id}`);
}
export function AddService(service) {
  return axios.post(API_BASE_URL_FACILITIES + "/services/add", service);
}

// ROOM API KEYS
export function GetAllRooms() {
  return axios.get(API_BASE_URL_FACILITIES + "/rooms");
}
export function GetRoomAPI(id) {
  return axios.get(API_BASE_URL_FACILITIES + `/rooms/${id}`);
}
export function AddRoomAPI(room) {
  return axios.post(API_BASE_URL_FACILITIES + "/rooms/add", room);
}
export function UpdateRoomAPI(id, room) {
  return axios.put(API_BASE_URL_FACILITIES + `/rooms/update/${id}`, room);
}
export function DeleteRoomAPI(id) {
  return axios.delete(API_BASE_URL_FACILITIES + `/rooms/delete/${id}`);
}
