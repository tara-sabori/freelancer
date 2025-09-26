import { useQuery } from "@tanstack/react-query";
import { getOwnerProject } from "../../../services/projectServices";
import { PiCircleNotchLight } from "react-icons/pi";
import ProjectListItem from "./ProjectListItem";
import { useState } from "react";
import CreateProjectForm from "./create/CreateProjectForm";

const MainProjectList = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { isPending, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProject,
    retry: false,
  });
  // const projects = [
  //   { title: "test 1", _id: 1, budget: 12000, deadline: new Date(), tags: [] },
  //   { title: "test 2", _id: 2, budget: 12000, deadline: new Date(), tags: [] },
  // ];
  const projects = data?.projects;
  return (
    <div className="space-y-4">
      {showCreateForm && (
        <CreateProjectForm onClose={() => setShowCreateForm(false)} />
      )}
      <div className="flex justify-between items-center px-5">
        <h3 className="font-semibold text-secondary-800">لیست پروژه‌ها</h3>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-primary-900 text-white text-sm p-2 rounded-md cursor-pointer"
        >
          ایجاد پروژه
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[500px] w-[80%] overflow-x-auto mx-auto">
          <thead>
            <tr>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tr-2xl">
                #
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                عنوان پروژه
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                دسته بندی
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                بودجه
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                ددلاین
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                تگ ها
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                فریلنسر
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
            {isPending ? (
              <tr>
                <td colSpan={9}>
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
                <td colSpan={9}>
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

export default MainProjectList;
