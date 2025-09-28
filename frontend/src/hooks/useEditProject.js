import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editOwnerProject } from "../services/projectServices";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProjectFunction } = useMutation({
    mutationFn: editOwnerProject,
    onSuccess: () => {
      toast.success("باموفقیت ویرایش شد.");
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });
  return { isEditing, editProjectFunction };
}
