import Stat from "../../../ui/Stat";
import { PiCardsThreeFill, PiGridFourFill, PiStackBold } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import { getOwnerProject } from "../../../services/projectServices";

const OwnerDashboard = () => {
  const { isPending, isFetching, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProject,
    retry: false,
  });
  const projects = data?.projects;
  const numOfAcceptedProjects = projects?.filter((p) => p?.freelancer)?.length;
  const numOfProposals = projects?.reduce(
    (acc, curr) => curr?.proposals?.length + acc,
    0,
  );
  console.log(projects);
  if (isPending) return <div>loading</div>;
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
          icon={<PiGridFourFill className="text-primary-900 text-2xl" />}
          className={"bg-primary-100 p-3"}
          title={"پروژه‌ها"}
          value={projects?.length || 0}
        />
        <Stat
          icon={<PiStackBold className="text-purple-700 text-2xl" />}
          className={"bg-purple-100 p-3"}
          title={"پروژه‌های واگذار شده"}
          value={numOfAcceptedProjects || 0}
        />
        <Stat
          icon={<PiCardsThreeFill className="text-orange-600 text-2xl" />}
          className={"bg-orange-100 p-3"}
          title={"درخواست‌ها"}
          value={numOfProposals || 0}
        />
      </div>
    </div>
  );
};

export default OwnerDashboard;
