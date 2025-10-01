import {
  PiCardsThreeFill,
  PiCurrencyDollarFill,
  PiSealCheckFill,
} from "react-icons/pi";
import useFreelancerProposal from "../../../hooks/useFreelancerProposal";
import Stat from "../../../ui/Stat";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";

const FreelancerDashboard = () => {
  const { data, isLoadingList } = useFreelancerProposal();
  const proposals = data?.proposals || [];
  const acceptedProposals = proposals?.filter((p) => p?.status === 2);
  const salary = acceptedProposals?.reduce((acc, curr) => acc + curr?.price, 0);
  if (isLoadingList) return <div>loading</div>;
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-secondary-900 font-semibold text-lg">آمار کلی</h3>
        <p className="text-secondary-900 text-sm">
          در یک نما خلاصه‌ای از آمار خود را ببینید.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        <Stat
          icon={<PiCardsThreeFill className="text-primary-900 text-2xl" />}
          className={"bg-primary-100 p-3"}
          title={"درخواست‌ها"}
          value={proposals?.length}
        />
        <Stat
          icon={<PiSealCheckFill className="text-orange-700 text-2xl" />}
          className={"bg-orange-100 p-3"}
          title={"درخواست‌های تایید شده"}
          value={acceptedProposals?.length}
        />
        <Stat
          icon={<PiCurrencyDollarFill className="text-green-800 text-2xl" />}
          className={"bg-green-100 p-3"}
          title={"درآمد"}
          value={toPersianNumbersWithComma(salary)}
        />
      </div>
    </div>
  );
};

export default FreelancerDashboard;
