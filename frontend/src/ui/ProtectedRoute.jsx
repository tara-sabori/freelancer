import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import useUser from "../hooks/useUser";
import { useEffect } from "react";
import Loading from "./Loading";
import { PiCaretLeftLight } from "react-icons/pi";
import useMoveBack from "../hooks/useMoveBack";

const ProtectedRoute = ({ children }) => {
  const moveBack = useMoveBack();
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname?.split("/")?.at(1);
  const isAuthorize = role === user?.role?.toLocaleLowerCase();
  const isVerfiy = user?.status === 2 && user?.isActive;

  useEffect(() => {
    if (isLoadingUser) return;
    if (!user) {
      navigate("/auth", { replace: true });
      toast.error("برای دسترسی به این صفحه وارد حساب کاربری خود شوید.");
      return;
    }
    // else if (!isVerfiy) {
    //   navigate("/", { replace: true });
    //   toast.error(
    //     "برای دسترسی به این صفحه باید حساب کاربری شما توسط ادمین فعال شود.",
    //   );
    //   return;
    // }
    else if (!isAuthorize) {
      navigate("/", { replace: true });
      toast.error("شما به این صفحه دسترسی ندارید");
      return;
    }
  }, [user, navigate, isAuthorize, isLoadingUser]);

  if (isLoadingUser) {
    return <Loading />;
  }
  if (!isVerfiy && isAuthorize)
    return (
      <div className="p-4">
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1 text-secondary-800 cursor-pointer"
            onClick={moveBack}
          >
            <span className="text-sm">بازگشت</span>
            <PiCaretLeftLight />
          </button>
        </div>
        <div
          className={`max-w-[300px] border rounded-md p-4 mt-10 mx-auto text-center text-sm
            ${
              user?.status === 1
                ? "border-warning bg-warning/10 text-warning/60"
                : "border-error bg-error/10 text-error/60"
            }`}
        >
          {user?.status === 1 ? (
            <p>پروفایل شما در انتظار تایید است</p>
          ) : (
            <p>پروفایل شما توسط ادمین رد شده است</p>
          )}
        </div>
      </div>
    );
  if (isAuthorize && isVerfiy) return children;
};

export default ProtectedRoute;
