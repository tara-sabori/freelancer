import { PiList, PiSignOut, PiUserDuotone } from "react-icons/pi";
import ProfileAvatar from "./ProfileAvatar";
import { useState } from "react";
import ConfirmSignOut from "./ConfirmSignOut";
import useUser from "../hooks/useUser";

const DashboardHeader = ({ openMenu }) => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || {};
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-5 py-3 bg-secondary-50 border-b border-secondary-200 flex items-center justify-between
         ${isLoadingUser && "blur-sm"}`}
    >
      <ProfileAvatar avatarUrl={user?.avatarUrl} name={user?.name} />
      <div className="flex items-center gap-3">
        <PiUserDuotone className="text-lg cursor-pointer" title="اطلاعات من" />
        <PiSignOut
          onClick={() => setIsOpen(true)}
          className="hover:text-error text-lg cursor-pointer"
          title="خروج"
        />
        <button
          onClick={openMenu}
          className="cursor-pointer inline-block md:hidden"
        >
          <PiList />
        </button>
      </div>
      {isOpen && <ConfirmSignOut onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default DashboardHeader;
