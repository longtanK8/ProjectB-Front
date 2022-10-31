import axios from "axios";
const API_BASE_URL_ACCOUNT_CONTROLLER = "http://localhost:8080/admin";
const API_BASE_URL_ACCOUNT_DATA = "http://localhost:8080/api/admin";

export function Login(account) {
  return axios.post(
    API_BASE_URL_ACCOUNT_CONTROLLER + "/account/login",
    account
  );
}

// Customer Management Account
export function GetListAccount(id) {
  return axios.get(API_BASE_URL_ACCOUNT_DATA + `/v1/accounts/${id}`);
}
export function GetAccountAPI(id) {
  return axios.get(API_BASE_URL_ACCOUNT_DATA + `/v1/accounts/details/${id}`);
}
export function AddAccountAPI(account) {
  return axios.post(API_BASE_URL_ACCOUNT_DATA + `/v1/accounts/add`, account);
}
export function UpdateAccountAPI(id, account) {
  return axios.put(
    API_BASE_URL_ACCOUNT_DATA + `/v1/accounts/update/${id}`,
    account
  );
}
export function DeleteAccountAPI(id) {
  return axios.delete(API_BASE_URL_ACCOUNT_DATA + `/v1/accounts/delete/${id}`);
}
