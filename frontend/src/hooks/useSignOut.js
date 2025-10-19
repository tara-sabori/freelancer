import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { signOutApi } from "../services/AuthServices";
import toast from "react-hot-toast";

export default function useSignOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: signOutFn } = useMutation({
    mutationFn: signOutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
      // window.location.reload();
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { isPending, signOutFn };
}
