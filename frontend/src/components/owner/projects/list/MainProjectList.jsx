import { useQuery } from "@tanstack/react-query";
import { PiCircleNotchLight, PiPlusBold } from "react-icons/pi";
import { useState } from "react";
import { getOwnerProject } from "../../../../services/projectServices";
import Modal from "../../../../ui/Modal";
import CreateProjectForm from "../create/CreateProjectForm";
import ProjectListItem from "./ProjectListItem";

const MainProjectList = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { isPending, isFetching, data } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProject,
    retry: false,
  });
  const projects = data?.projects;
  return (
    <div className="space-y-4">
      {showCreateForm && (
        <Modal title={"ایجاد پروژه"} onClose={() => setShowCreateForm(false)}>
          <CreateProjectForm onClose={() => setShowCreateForm(false)} />
        </Modal>
      )}
      <div className="flex justify-between items-center px-0 w-full md:w-[90%]">
        <h3 className="font-semibold text-secondary-700">لیست پروژه‌های شما</h3>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-primary-900 text-white text-sm flex items-center gap-1 p-2 rounded-md cursor-pointer"
        >
          <PiPlusBold />
          <span>ایجاد پروژه</span>
        </button>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="min-w-[600px] w-[90%] overflow-x-auto mx-">
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
              <th className="bg-secondary-100 text-sm font-normal py-1.5">
                عملیات
              </th>
              <th className="bg-secondary-100 text-sm font-normal py-1.5 rounded-tl-2xl">
                درخواست
              </th>
            </tr>
          </thead>
          <tbody>
            {isPending || isFetching ? (
              <tr>
                <td colSpan={10}>
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
                <td colSpan={10}>
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
