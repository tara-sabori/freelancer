import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCategoryApi } from "../services/categoryServices";
import toast from "react-hot-toast";

export default function useRemoveCategory() {
  const queryClient = useQueryClient();
  const { mutate: removeCategoryFn, isPending: isDeleting } = useMutation({
    mutationFn: removeCategoryApi,
    onSuccess: () => {
      toast.success("دسته‌بندی حذف شد.");
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { removeCategoryFn, isDeleting };
}
