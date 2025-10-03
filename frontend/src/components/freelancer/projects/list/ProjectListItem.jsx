import toLocalDateShort from "../../../../utils/toLocalDateShort";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../../utils/toPersianNumbers";
import truncateText from "../../../../utils/truncateText";

const ProjectListItem = ({ project, row }) => {
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs py-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs py-1.5 px-1 text-center">
        {truncateText(project?.title, 30)}
      </td>
      <td className="text-xs py-1.5 px-1 text-center">
        {toPersianNumbersWithComma(project?.budget)}
      </td>
      <td className="text-xs py-1.5 px-1 text-center">
        {toLocalDateShort(project?.deadline)}
      </td>
      <td className="text-xs py-1.5 px-1 text-center">
        <span
          className={`inline-block whitespace-nowrap rounded-xl px-2 py-0.5 text-white w-[40px]
            ${project?.status === "OPEN" ? "bg-green-600" : "bg-error"}`}
        >
          {project?.status === "OPEN" ? "باز" : "بسته"}
        </span>
      </td>
      <td className="text-xs py-1.5 px-1 text-center">
        {/* <Modal
              open={open}
              onClose={() => setOpen(false)}
              title={`درخواست انجام پروژه ${title}`}
            >
              <CreateProposal
                projectId={project._id}
                onClose={() => setOpen(false)}
              />
            </Modal>
            <button onClick={() => setOpen(true)}>
              <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
            </button> */}
      </td>
    </tr>
  );
};

export default ProjectListItem;
