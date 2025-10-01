import api from "./api";

export async function changeProposalStatusApi({ id, formData }) {
  return api.patch(`/proposal/${id}`, formData).then(({ data }) => data.data);
}

export async function getFreelancerProposals() {
  return api.get("/proposal/list").then(({ data }) => data?.data);
}
