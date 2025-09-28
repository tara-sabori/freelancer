import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProject } from "../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: removeProjectFunction } = useMutation({
    mutationFn: removeOwnerProject,
    onSuccess: () => {
      toast.success("پروژه شما حذف شد.");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { isDeleting, removeProjectFunction };
}
