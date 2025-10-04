import { PiCircleNotchLight } from "react-icons/pi";
import useAllProjects from "../../../../hooks/useAllProjects";
import ProjectListItem from "./ProjectListItem";
import FilterCompnent from "./filter-component/FilterCompnent";

const ProjectList = () => {
  const { data, isLoadingList } = useAllProjects();
  const projects = data?.projects || [];
  return (
    <div className="space-y-4">
      {/* filter */}
      <FilterCompnent />
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
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                وضعیت
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoadingList ? (
              <tr>
                <td colSpan={6}>
                  <div className="bg-secondary-50 flex items-center justify-center gap-2 h-[200px]">
                    <span className="text-xs">در حال بارگذاری</span>
                    <div className="animate-spin">
                      <PiCircleNotchLight />
                    </div>
                  </div>
                </td>
              </tr>
            ) : !projects?.length ? (
              <tr>
                <td colSpan={6}>
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
              projects?.map((project) => (
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
    </div>
  );
};

export default ProjectList;
