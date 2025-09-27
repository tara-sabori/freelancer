import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/AuthServices";

export default function usseUser() {
  return useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
}
