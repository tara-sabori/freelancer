import { useState } from "react";
import Modal from "../../../ui/Modal";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import ChangeUserStatus from "./ChangeUserStatus";

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
    className: "bg-green-400",
  },
];

const UserListItem = ({ user, row }) => {
  const [open, setOpen] = useState(false);
  const { status } = user;
  return (
    <tr className="even:bg-primary-50/50">
      <td className="text-xs p-1.5 px-1 text-center">
        {toPersianNumbers(row + 1)}
      </td>
      <td className="text-xs p-1.5 px-1 text-center whitespace-nowrap">
        {user?.name}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">{user?.email}</td>
      <td className="text-xs p-1.5 px-1 text-center">{user?.phoneNumber}</td>
      <td className="text-xs p-1.5 px-1 text-center">
        {user?.role === "OWNER" ? "کارفرما" : "فریلنسر"}
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        <span
          className={`inline-block whitespace-nowrap rounded-xl px-2 py-0.5 text-white ${statusStyle[status].className}`}
        >
          {statusStyle[status].label}
        </span>
      </td>
      <td className="text-xs p-1.5 px-1 text-center">
        {open && (
          <Modal title="تغییر وضعیت کاربر" onClose={() => setOpen(false)}>
            <ChangeUserStatus
              userId={user._id}
              onClose={() => setOpen(false)}
            />
          </Modal>
        )}
        <button
          className="text-primary-900 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          تغییر وضعیت
        </button>
      </td>
    </tr>
  );
};

export default UserListItem;
