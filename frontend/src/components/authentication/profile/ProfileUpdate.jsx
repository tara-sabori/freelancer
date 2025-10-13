import ProfileForm from "./form/ProfileForm";
import useMoveBack from "../../../hooks/useMoveBack";
import { PiCaretLeftLight } from "react-icons/pi";

const ProfileUpdate = ({ user }) => {
  const moveBack = useMoveBack();
  return (
    <div className="pt-8 px-5">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-1 text-secondary-800 cursor-pointer"
          onClick={moveBack}
        >
          <span className="text-sm">بازگشت</span>
          <PiCaretLeftLight />
        </button>
      </div>
      <div className="!space-y-4 p-5 mx-auto w-full sm:w-[400px]">
        <p className="text-sm font-semibold text-secondary-500">
          ویرایش اطلاعات
        </p>
        <ProfileForm user={user} />
      </div>
    </div>
  );
};

export default ProfileUpdate;
