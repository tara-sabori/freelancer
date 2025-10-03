import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProposalApi } from "../services/proposalServices";
import toast from "react-hot-toast";

export default function useCreateProposal() {
  const queryClient = useQueryClient();
  const { isPending, mutate: createProposalFn } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: () => {
      toast.success("درخواست شما باموفقیت ارسال شد.");
      queryClient.invalidateQueries({
        queryKey: ["freelancer-proposals"],
      });
    },
    onError: (err) =>
      toast.error(err?.response?.data?.message || "مشکلی رخ داده است."),
  });

  return { isPending, createProposalFn };
}
