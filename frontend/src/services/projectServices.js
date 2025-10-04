import api from "./api";

export async function getOwnerProject() {
  return api.get("/project/owner-projects").then(({ data }) => data.data);
}

export async function cretaeOwnerProject(formData) {
  return api.post("/project/add", formData).then(({ data }) => data.data);
}

export async function editOwnerProject({ id, formData }) {
  return api
    .patch(`/project/update/${id}`, formData)
    .then(({ data }) => data.data);
}

export async function changeProjectStatus({ id, formData }) {
  return api.patch(`/project/${id}`, formData).then(({ data }) => data.data);
}

export async function removeOwnerProject(id) {
  return api.delete(`/project/${id}`).then(({ data }) => data.data);
}

export async function getProjectInfo(id) {
  return api.get(`/project/${id}`).then(({ data }) => data.data);
}

export async function getAllProjectsFn(qs) {
  return api.get("/project/list" + qs).then(({ data }) => data.data);
}
