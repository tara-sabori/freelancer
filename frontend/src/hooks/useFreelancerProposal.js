import { useQuery } from "@tanstack/react-query";
import { getFreelancerProposals } from "../services/proposalServices";

export default function useFreelancerProposal() {
  const { data, isPending: isLoadingList } = useQuery({
    queryKey: ["freelancer-proposals"],
    queryFn: getFreelancerProposals,
    retry: false,
  });

  return { data, isLoadingList };
}
