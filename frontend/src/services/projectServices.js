import api from "./api";

export async function getOwnerProject() {
  return api.get("/project/owner-projects").then(({ data }) => data.data);
}
