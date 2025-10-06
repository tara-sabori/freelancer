import { useQuery } from "@tanstack/react-query";
import { getUserListApi } from "../services/AuthServices";

export default function useUserList() {
  const {
    data: userList,
    isFetching,
    isPending: isLoadingList,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUserListApi,
    retry: false,
  });

  return { userList, isFetching, isLoadingList };
}
