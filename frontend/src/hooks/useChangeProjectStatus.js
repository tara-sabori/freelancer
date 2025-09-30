import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatus } from "../services/projectServices";
import toast from "react-hot-toast";

export default function useChangeProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isChanging, mutate: changeStatus } = useMutation({
    mutationFn: changeProjectStatus,
    onSuccess: () => {
      toast.success("وضعیت پروژه تغییر کرد.");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isChanging, changeStatus };
}
