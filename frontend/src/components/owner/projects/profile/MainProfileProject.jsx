import useMoveBack from "../../../../hooks/useMoveBack";
import useProfileProject from "../../../../hooks/useProfileProject";
import { PiCaretLeftLight } from "react-icons/pi";
// import ProjectHeader from "./ProjectHeader";
import ProposalsList from "./proposal-list/ProposalsList";
import Loading from "../../../../ui/Loading";

const MainProfileProject = () => {
  const { data, isPending, isFetching } = useProfileProject();
  const project = data?.project || null;
  console.log(project);
  const moveBack = useMoveBack();
  return (
    <div className="space-y-6 h-full">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-1 text-secondary-800 cursor-pointer"
          onClick={moveBack}
        >
          <span className="text-sm">بازگشت</span>
          <PiCaretLeftLight />
        </button>
      </div>
      <>
        {isPending ? (
          <Loading />
        ) : !project ? (
          <p className="font-bold text-secondary-700">
            پروژه‌ای که دنبالش بودید یافت نشد.
          </p>
        ) : (
          <div className="space-y-6 w-full md:max-w-3xl mx-auto">
            {/* <ProjectHeader project={project} /> */}
            <h3 className="font-semibold text-secondary-700 text-sm">
              لیست درخواست‌های {project?.title}
            </h3>
            <ProposalsList
              proposals={project?.proposals}
              isFetching={isFetching}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default MainProfileProject;
