import { useState } from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../../../../utils/toPersianNumbers";
import truncateText from "../../../../../utils/truncateText";
import Modal from "../../../../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import toast from "react-hot-toast";

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

const ProposalListItem = ({ proposal, row, isFreelancer }) => {
  const { status, user } = proposal;
  const [open, setOpen] = useState(false);
  const clickHandler = () => {
    if (isFreelancer && isFreelancer !== user?._id) {
      toast?.error("برای این پروژه فریلنسر انتخاب شده است.");
      return;
    }
    setOpen(true);
  };
  return (
    <tr>
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center whitespace-nowrap">
        {user.name}
      </td>
      <td
        className="text-xs p-1.5 px-1 text-center"
        title={proposal.description}
      >
        <p>{truncateText(proposal.description, 50)}</p>
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(proposal.duration)} روز
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbersWithComma(proposal.price)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        <span
          className={`inline-block whitespace-nowrap rounded-xl px-2 p-0.5 text-white ${statusStyle[status].className}`}
        >
          {statusStyle[status].label}
        </span>
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {open && (
          <Modal title="تغییر وضعیت درخواست" onClose={() => setOpen(false)}>
            <ChangeProposalStatus
              proposalId={proposal._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
        )}
        <button
          className="cursor-pointer text-primary-900"
          onClick={clickHandler}
        >
          تغییر وضعیت
        </button>
      </td>
    </tr>
  );
};

export default ProposalListItem;
