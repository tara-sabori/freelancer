import { useMutation } from "@tanstack/react-query";
import { signOutApi } from "../services/AuthServices";
import toast from "react-hot-toast";

export default function useSignOut() {
  const { isPending, mutate: signOutFn } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => toast.success("از حساب  کاربری خود خارج شدید"),
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { isPending, signOutFn };
}
