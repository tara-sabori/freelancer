import api from "./api";

export async function getOtp(formData) {
  return api.post("/user/get-otp", formData).then(({ data }) => data?.data);
}

export async function checkOtp(formData) {
  return api.post("/user/check-otp", formData).then(({ data }) => data?.data);
}
