import useUser from "../../hooks/useUser";
import { Navigate } from "react-router";
import Loading from "../../ui/Loading";
import ProfileMe from "../../components/authentication/profile/ProfileMe";

const ProfileMePage = () => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;
  return isLoadingUser ? (
    <Loading />
  ) : !user ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <ProfileMe user={user} />
  );
};

export default ProfileMePage;
