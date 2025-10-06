import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeUserStatusApi } from "../services/AuthServices";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const queryClient = useQueryClient();

  const { mutate: changeStatusFn, isPending: isChanging } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: () => {
      toast.success("وضعیت کاربر باموفقیت تغییر کرد.");
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { changeStatusFn, isChanging };
}
