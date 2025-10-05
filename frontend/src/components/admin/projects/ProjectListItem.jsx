import { useState } from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import toLocalDateShort from "../../../utils/toLocalDateShort";

const ProjectListItem = ({ project, row }) => {
  const [open, setOpen] = useState(false);
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {truncateText(project?.title, 30)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbersWithComma(project?.budget)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {toLocalDateShort(project?.deadline)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        <span
          className={`inline-block whitespace-nowrap rounded-xl px-2 py-0.5 text-white w-[40px]
            ${project?.status === "OPEN" ? "bg-green-600" : "bg-error"}`}
        >
          {project?.status === "OPEN" ? "باز" : "بسته"}
        </span>
      </td>
    </tr>
  );
};

export default ProjectListItem;
