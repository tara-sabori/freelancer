import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/AuthServices";
import toast from "react-hot-toast";

export default function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfileFn, isPending: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
      toast.success("اطلاعات شما باموفقیت ویرایش شد.");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است.");
      console.log(err);
    },
  });

  return { updateProfileFn, isUpdating };
}
