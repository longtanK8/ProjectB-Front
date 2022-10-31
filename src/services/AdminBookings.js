import axios from "axios";

const API_BASE_URL_BOOKINGS = "http://localhost:8080/api/admin/v2";

// BOOKING API KEYS
export function GetAllBookings() {
  return axios.get(API_BASE_URL_BOOKINGS + "/bookings");
}
export function GetCustomerInformation(id) {
  return axios.get(API_BASE_URL_BOOKINGS + `/bookings/customer/${id}`);
}
export function GetBookingDetails(id) {
  return axios.get(API_BASE_URL_BOOKINGS + `/bookings/details/${id}`);
}
export function GetRoomsForAssigning() {
  return axios.get(API_BASE_URL_BOOKINGS + "/bookings/rooms/assign");
}
export function AssignRoomToCustomer(bid, roomID, booking) {
  return axios.post(
    API_BASE_URL_BOOKINGS + `/bookings/rooms/assign/${roomID}/${bid}`,
    booking
  );
}
export function UpdateCustomerBooking(booking) {
  return axios.post(API_BASE_URL_BOOKINGS + `/bookings/rooms/update`, booking);
}
