import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import useUser from "../hooks/useUser";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || {};
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const role = pathname?.split("/")?.at(1);
  const isAuthorize = role === user?.role?.toLocaleLowerCase();
  const isVerfiy = user?.status === 2 || user?.isActive;

  useEffect(() => {
    if (isLoadingUser) return;
    if (!user) {
      navigate("/", { replace: true });
      toast.error("برای دسترسی یه این صفحه وارد حساب کاربری خود شوید.");
    } else if (!isVerfiy) {
      navigate("/", { replace: true });
      toast.error(
        "برای دسترسی یه این صفحه باید حساب کاربری شما توسط ادمین فعال شود.",
      );
    } else if (!isAuthorize) {
      navigate("/", { replace: true });
      toast.error("شما به این صفحه دسترسی ندارید");
    }
  }, [user, navigate, isAuthorize, isVerfiy, isLoadingUser]);

  if (isLoadingUser) {
    return <div>loading...</div>;
  }
  if (isAuthorize && isVerfiy) return children;
};

export default ProtectedRoute;
