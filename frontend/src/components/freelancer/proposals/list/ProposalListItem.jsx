import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../../utils/toPersianNumbers";
import truncateText from "../../../../utils/truncateText";

const statusStyle = [
  {
    label: "رد شده",
    className: "bg-error",
  },
  {
    label: "در انتظار تایید",
    className: "bg-secondary-400",
  },
  {
    label: "تایید شده",
    className: "bg-green-500",
  },
];

const ProposalListItem = ({ proposal, row }) => {
  const { status } = proposal;
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {truncateText(proposal?.description, 60)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {" "}
        {toPersianNumbers(proposal?.duration)} روز
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbersWithComma(proposal?.price)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        <span
          className={`inline-block whitespace-nowrap rounded-xl px-2 py-0.5 text-white
             ${statusStyle[status]?.className}`}
        >
          {statusStyle[status]?.label}
        </span>
      </td>
    </tr>
  );
};

export default ProposalListItem;
