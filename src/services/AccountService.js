import axios from "axios";

const ACCOUNT_BASE_API_URL = "http://localhost:8080/client/account";
const ACCOUNT_AUTHENTICATE_API_URL = "http://localhost:8080/api/client";

export function SignUpService(user) {
  return axios.post(ACCOUNT_BASE_API_URL + "/signup", user);
}
export function PersonalInfoSave(personalInfo) {
  return axios.post(ACCOUNT_BASE_API_URL + "/client_info", personalInfo);
}
export function VerifyPersonal(personalInfo, id) {
  return axios.post(
    ACCOUNT_BASE_API_URL + `/client_info/verify/${id}`,
    personalInfo
  );
}
export function ClientLogin(user) {
  return axios.post(ACCOUNT_AUTHENTICATE_API_URL + "/login", user);
}
