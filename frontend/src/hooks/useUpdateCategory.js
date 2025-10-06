import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategoryApi } from "../services/categoryServices";
import toast from "react-hot-toast";

export default function useUpdateCategory() {
  const queryClient = useQueryClient();

  const { mutate: updateCategoryFn, isPending: isUpdating } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: () => {
      toast.success("دسته‌بندی باموفقیت ویرایش شد.");
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (err) => {
      (toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
        console.log(err));
    },
  });

  return { updateCategoryFn, isUpdating };
}
