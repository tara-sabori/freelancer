import { PiCaretLeftLight } from "react-icons/pi";
import useMoveBack from "../../../hooks/useMoveBack";
import ProfileAvatar from "../../../ui/ProfileAvatar";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import ProfileInfo from "../../../ui/ProfileInfo";
import { Link } from "react-router";

const ProfileMe = ({ user }) => {
  console.log(user);
  const role =
    user?.role === "OWNER"
      ? "کارفرما"
      : user?.role === "FREELANCER"
        ? "فریلنسر"
        : "ادمین";
  const moveBack = useMoveBack();
  return (
    <div className="space-y-4 pt-8 px-5">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-1 text-secondary-800 cursor-pointer"
          onClick={moveBack}
        >
          <span className="text-sm">بازگشت</span>
          <PiCaretLeftLight />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="space-y-4 p-5 w-full sm:w-[400px] bg-secondary-50 shadow-sm rounded-md">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-secondary-500">
              اطلاعات کاربری
            </p>
            <Link
              to={"/profile/me/update"}
              className="w-fit p-1.5 border border-primary-900 text-primary-900 text-xs rounded-md"
            >
              ویرایش اطلاعات
            </Link>
          </div>
          <ProfileAvatar avatarUrl={user?.avatarUrl} name={user?.name} />
          <ProfileInfo title={"نقش"} value={role} />
          <ProfileInfo
            title={"شماره همراه"}
            value={toPersianNumbers(user?.phoneNumber)}
          />
          <ProfileInfo title={"حوزه تخصصی"} value={user?.biography} />
        </div>
      </div>
    </div>
  );
};

export default ProfileMe;
