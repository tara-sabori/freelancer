import Modal from "../../../ui/Modal";
import toLocalDateShort from "../../../utils/toLocalDateShort";
import { toPersianNumbersWithComma } from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";

const ProjectListItem = ({ project, row }) => {
  const open = false;
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs py-1.5 text-center">{row + 1}</td>
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
      <td className="text-xs py-1.5 text-center">
        <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
          {project?.tags.map((tag) => (
            <span className="badge badge--secondary" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </td>
      <td className="text-xs py-1.5 text-center">
        {project?.freelancer?.name || "-"}
      </td>
      <td className="text-xs py-1.5 text-center">{project?.status}</td>
      <td className="text-xs py-1.5 text-center">
        {open && <Modal>kkkkk</Modal>}
      </td>
      {/* <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencilMinus className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              title={`ویرایش ${project.title}`}
              open={isEditOpen}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                projectToEdit={project}
                onClose={() => setIsEditOpen(false)}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف ${project.title}`}
              open={isDeleteOpen}
              onClose={() => setIsDeleteOpen(false)}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={() =>
                  removeProject(project._id, {
                    onSuccess: () => setIsDeleteOpen(false),
                  })
                }
                disabled={false}
              />
            </Modal>
          </>
        </div>
      </td> */}
      {/* <td>
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td> */}
    </tr>
  );
};

export default ProjectListItem;
