import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategoryApi } from "../services/categoryServices";
import toast from "react-hot-toast";

export default function useCreateCategory() {
  const queryClient = useQueryClient();

  const { mutate: createCategoryFn, isPending: isCreating } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: () => {
      toast.success("دسته‌یندی باموفقیت ایجاد شد.");
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { createCategoryFn, isCreating };
}
