import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProjectInfo } from "../services/projectServices";

export default function useProfileProject() {
  const { id } = useParams();

  const { data, isPending, isFetching } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectInfo(id),
    retry: false,
  });
  return { data, isPending, isFetching };
}
