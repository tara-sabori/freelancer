import {
  PiCardsThreeFill,
  PiCirclesThreePlusDuotone,
  PiGridFourFill,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import useCategories from "../../../hooks/useCategories";
import useUserList from "../../../hooks/useUserList";
import Loading from "../../../ui/Loading";
import Stat from "../../../ui/Stat";
import useAllProjects from "../../../hooks/useAllProjects";
import useFreelancerProposal from "../../../hooks/useFreelancerProposal";

const AdminDashboard = () => {
  const { userList, isLoadingList: isLoadingUsers } = useUserList();
  const numofUsers =
    userList?.users?.filter((u) => u?.role !== "ADMIN" && u?.status === 2)
      ?.length || 0;

  const { categories, isLoadingCategory } = useCategories();
  const numofCat = categories?.length || 0;

  const { data: proposalList, isLoadingList: isLoadingProposal } =
    useFreelancerProposal();
  const numofProposals = proposalList?.proposals?.length || 0;

  const { data: projectList, isLoadingList } = useAllProjects();
  const numofProjects = projectList?.projects?.length || 0;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-secondary-900 font-semibold text-lg">آمار کلی</h3>
        <p className="text-secondary-900 text-sm">
          در یک نما خلاصه‌ای از آمار خود را ببینید.
        </p>
      </div>
      {isLoadingCategory ||
      isLoadingList ||
      isLoadingProposal ||
      isLoadingUsers ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <Stat
            icon={<PiGridFourFill className="text-primary-900 text-2xl" />}
            className={"bg-primary-100 p-3"}
            title={"پروژه‌ها"}
            value={numofProjects}
          />
          <Stat
            icon={<PiCardsThreeFill className="text-purple-800 text-2xl" />}
            className={"bg-purple-100 p-3"}
            title={"درخواست‌ها"}
            value={numofProposals}
          />
          <Stat
            icon={<PiUsersThreeDuotone className="text-orange-600 text-2xl" />}
            className={"bg-orange-100 p-3"}
            title={"کاربران"}
            value={numofUsers}
          />
          <Stat
            icon={
              <PiCirclesThreePlusDuotone className="text-gray-600 text-2xl" />
            }
            className={"bg-gray-100 p-3"}
            title={"دسته‌بندی‌ها"}
            value={numofCat}
          />
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
