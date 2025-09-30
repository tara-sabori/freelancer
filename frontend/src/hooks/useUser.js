import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/AuthServices";

export default function useUser() {
  const { data: userData, isPending: isLoadingUser } = useQuery({
    queryKey: ["get-user"],
    queryFn: getUser,
    retry: false,
  });
  return { userData, isLoadingUser };
}
