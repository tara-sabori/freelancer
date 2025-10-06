import api from "./api";

export async function getCategories() {
  return api.get("/category/list").then(({ data }) => data?.data?.categories);
}

export async function createCategoryApi(formData) {
  return api
    .post("/admin/category/add", formData)
    .then(({ data }) => data?.data);
}

export async function updateCategoryApi({ id, formData }) {
  return api
    .patch(`/admin/category/update/${id}`, formData)
    .then(({ data }) => data?.data);
}

export async function removeCategoryApi(id) {
  return api
    .delete(`/admin/category/remove/${id}`)
    .then(({ data }) => data?.data);
}
