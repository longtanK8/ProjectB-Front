import axios from "axios";
const API_BASE_URL_ACCOUNT_DATA_STATISTIC =
  "http://localhost:8080/api/admin/v1/statistic";
const API_BASE_URL_BOOKING_DATA_STATISTIC =
  "http://localhost:8080/api/admin/v2";
const API_BASE_URL_HOTEL_INFO = "http://localhost:8080/api/admin/v3";
export function CounterUsers() {
  return axios.get(API_BASE_URL_ACCOUNT_DATA_STATISTIC + "/accounts");
}
export function CounterBookings() {
  return axios.get(API_BASE_URL_ACCOUNT_DATA_STATISTIC + "/bookings");
}
export function BookingStatistic() {
  return axios.get(API_BASE_URL_BOOKING_DATA_STATISTIC + "/bookings/statistic");
}
export function ChartStatistic() {
  return axios.get(
    API_BASE_URL_BOOKING_DATA_STATISTIC + "/bookings/statistic/chart"
  );
}
export function GetAbout() {
  return axios.get(API_BASE_URL_HOTEL_INFO + "/about/get");
}
export function UpdateAbout(value) {
  return axios.post(API_BASE_URL_HOTEL_INFO + "/about/update", value);
}
export function getContact() {
  return axios.get(API_BASE_URL_HOTEL_INFO + "/contact/get");
}
export function updateContact(value) {
  return axios.post(API_BASE_URL_HOTEL_INFO + "/contact/update", value);
}
