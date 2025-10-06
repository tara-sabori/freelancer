import api from "./api";

export async function getOtp(formData) {
  return api.post("/user/get-otp", formData).then(({ data }) => data?.data);
}

export async function checkOtp(formData) {
  return api.post("/user/check-otp", formData).then(({ data }) => data?.data);
}

export async function completeProfile(formData) {
  return api
    .post("/user/complete-profile", formData)
    .then(({ data }) => data?.data);
}

export async function getUser() {
  return api.get("/user/profile").then(({ data }) => data?.data);
}

export async function signOutApi() {
  return api.post("/user/logout").then(({ data }) => data?.data);
}

export async function getUserListApi() {
  return api.get("/admin/user/list").then(({ data }) => data?.data);
}

export async function changeUserStatusApi({ id, formData }) {
  return api
    .patch(`/admin/user/verify/${id}`, formData)
    .then(({ data }) => data?.data);
}
