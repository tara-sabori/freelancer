import { useQuery } from "@tanstack/react-query";
import { getAllProjectsFn } from "../services/projectServices";

export default function useAllProjects() {
  const { data, isPending: isLoadingList } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjectsFn,
    retry: false,
  });

  return { data, isLoadingList };
}
