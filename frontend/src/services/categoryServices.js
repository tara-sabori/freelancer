import api from "./api";

export const getCategories = async () => {
  return api.get("/category/list").then(({ data }) => data?.data?.categories);
};
