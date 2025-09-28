import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cretaeOwnerProject } from "../services/projectServices";
import toast from "react-hot-toast";

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutateAsync: createProjectFunction } =
    useMutation({
      mutationKey: ["cretae-project"],
      mutationFn: cretaeOwnerProject,
      onSuccess: () => {
        toast.success("پروژه باموفقیت ایجاد شد.");
        queryClient.invalidateQueries({
          queryKey: ["owner-projects"],
        });
      },
      onError: (err) =>
        toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
    });
  return { isCreating, createProjectFunction };
}
