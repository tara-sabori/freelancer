import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { getAllProjectsFn } from "../services/projectServices";

export default function useAllProjects() {
  const { search } = useLocation();
  const queryObject = Object.fromEntries(new URLSearchParams(search));

  const { data, isPending: isLoadingList } = useQuery({
    queryKey: ["all-projects", queryObject],
    queryFn: () => getAllProjectsFn(search),
    retry: false,
  });

  return { data, isLoadingList };
}
