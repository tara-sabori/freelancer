import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";
import { changeProposalStatusApi } from "../services/proposalServices";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { isPending: isChanging, mutate: changeProposalStatusFn } = useMutation(
    {
      mutationFn: changeProposalStatusApi,
      onSuccess: () => {
        toast.success("وضعیت درخواست تغییر کرد.");
        queryClient.invalidateQueries({
          queryKey: ["project", id],
        });
      },
      onError: (err) => toast.error(err?.response?.data?.message),
    },
  );
  return { isChanging, changeProposalStatusFn };
}
