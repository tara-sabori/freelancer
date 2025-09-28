import { useState } from "react";
import { Link } from "react-router";
import {
  PiEyeDuotone,
  PiPencilLineLight,
  PiTrashDuotone,
} from "react-icons/pi";
import Modal from "../../../../ui/Modal";
import toLocalDateShort from "../../../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../../utils/toPersianNumbers";
import truncateText from "../../../../utils/truncateText";
import CreateProjectForm from "../create/CreateProjectForm";
import ConfirmDelete from "../../../../ui/ConfirmDelete";
import useRemoveProject from "../../../../hooks/useRemoveProject";
import ToggleStatus from "./ToggleStatus";

const ProjectListItem = ({ project, row }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { isDeleting, removeProjectFunction } = useRemoveProject();
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs py-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs py-1.5 text-center">
        {truncateText(project?.title, 30)}
      </td>
      <td className="text-xs py-1.5 text-center">
        {" "}
        {project?.category?.title}
      </td>
      <td className="text-xs py-1.5 text-center">
        {toPersianNumbersWithComma(project?.budget)}
      </td>
      <td className="text-xs py-1.5 text-center">
        {toLocalDateShort(project?.deadline)}
      </td>
      <td className="text-xs py-1.5">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-[200px] mx-auto">
          {project?.tags.map((tag) => (
            <span
              className="inline-block whitespace-nowrap rounded-xl px-2 py-0.5 bg-secondary-200 text-secondary-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="text-xs py-1.5 text-center">
        {project?.freelancer?.name || "-"}
      </td>
      <td className="text-xs py-1.5 text-center">
        <ToggleStatus status={project?.status} projectId={project?._id} />
      </td>
      <td>
        <div className="flex items-center justify-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <PiPencilLineLight className="text-lg text-primary-900 cursor-pointer" />
            </button>
            {isEditOpen && (
              <Modal
                title={`ویرایش ${project.title}`}
                onClose={() => setIsEditOpen(false)}
              >
                <CreateProjectForm
                  project={project}
                  onClose={() => setIsEditOpen(false)}
                />
              </Modal>
            )}
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <PiTrashDuotone className="text-lg text-error cursor-pointer" />
            </button>
            {isDeleteOpen && (
              <Modal
                title={`حذف ${project.title}`}
                open={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                className="md:!w-[380px]"
              >
                <ConfirmDelete
                  resourceName={project.title}
                  onClose={() => setIsDeleteOpen(false)}
                  onConfirm={() =>
                    removeProjectFunction(project?._id, {
                      onSuccess: () => setIsDeleteOpen(false),
                    })
                  }
                  disabled={isDeleting}
                />
              </Modal>
            )}
          </>
        </div>
      </td>
      <td>
        <Link to={project._id} className="flex justify-center">
          <PiEyeDuotone className="text-lg text-primary-800" />
        </Link>
      </td>
    </tr>
  );
};

export default ProjectListItem;
