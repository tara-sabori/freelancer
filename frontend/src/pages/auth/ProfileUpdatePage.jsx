import ProfileUpdate from "../../components/authentication/profile/ProfileUpdate";
import useUser from "../../hooks/useUser";
import Loading from "../../ui/Loading";
import { Navigate } from "react-router";

const ProfileUpdatePage = () => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;
  return isLoadingUser ? (
    <Loading />
  ) : user && user?.status === 2 ? (
    <ProfileUpdate user={user} />
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};

export default ProfileUpdatePage;
