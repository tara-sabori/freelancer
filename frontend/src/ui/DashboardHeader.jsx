import { useState } from "react";
import { Link } from "react-router";
import { PiArrowRight, PiList, PiSignOut, PiUserDuotone } from "react-icons/pi";
import ProfileAvatar from "./ProfileAvatar";
import ConfirmSignOut from "./ConfirmSignOut";
import useUser from "../hooks/useUser";

const DashboardHeader = ({ openMenu }) => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || {};
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`p-3 md:p-5 py-3 bg-secondary-50 border-b border-secondary-200 flex items-center justify-between
         ${isLoadingUser && "blur-sm"}`}
    >
      <div className="flex items-center gap-3 md:gap-6">
        <Link to={"/"} className="flex items-center gap-0.5 md:gap-2">
          <PiArrowRight className="cursor-pointer" />
          <span className="text-xs md:text-sm">بازگشت</span>
        </Link>
        <ProfileAvatar avatarUrl={user?.avatarUrl} name={user?.name} />
      </div>

      <div className="flex items-center gap-3">
        <Link to={"/profile/me"}>
          <PiUserDuotone
            className="text-lg cursor-pointer"
            title="اطلاعات من"
          />
        </Link>
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
