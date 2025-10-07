import { useSearchParams } from "react-router";
import { PiCircleNotchLight } from "react-icons/pi";
import ProjectListItem from "./ProjectListItem";
import FilterComponent from "./FilterComponent";
import useAllProjects from "../../../hooks/useAllProjects";
import Paginate from "../../../ui/Paginate";

const ProjectList = () => {
  const [serachParams] = useSearchParams();
  const page = serachParams.get("page");
  const currentPage = page || 1;

  const { data, isLoadingList } = useAllProjects();
  const projects = data?.projects || [];

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;
  const records = projects?.slice(firstIndex, lastIndex);
  const pageCount = Math.ceil(projects?.length / 10);

  return (
    <div className="space-y-4">
      {/* filter */}
      <FilterComponent />
      {/* list */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-[90%] overflow-x-auto">
          <thead>
            <tr>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tr-2xl">
                #
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                عنوان پروژه
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                بودجه
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                ددلاین
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoadingList ? (
              <tr>
                <td colSpan={5}>
                  <div className="bg-secondary-50 flex items-center justify-center gap-2 h-[200px]">
                    <span className="text-xs">در حال بارگذاری</span>
                    <div className="animate-spin">
                      <PiCircleNotchLight />
                    </div>
                  </div>
                </td>
              </tr>
            ) : !records?.length ? (
              <tr>
                <td colSpan={5}>
                  <div className="bg-secondary-50 flex items-center justify-center gap-4 h-[200px]">
                    <span className="text-xs">موردی یافت نشد</span>
                    <div className="w-[150px] h-[150px]">
                      <img
                        src="/assets/images/not-found.svg"
                        alt="not found"
                        className="w-[150px]"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ) : (
              records?.map((project) => (
                <ProjectListItem
                  key={project?._id}
                  project={project}
                  row={projects.indexOf(project)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      {!isLoadingList && records?.length > 0 && (
        <Paginate pageCount={pageCount} />
      )}
    </div>
  );
};

export default ProjectList;
