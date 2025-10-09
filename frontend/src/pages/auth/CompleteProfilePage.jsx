import CompleteProfileForm from "../../components/authentication/CompleteProfileForm";
import useUser from "../../hooks/useUser";
import Loading from "../../ui/Loading";
import { Navigate } from "react-router";

const CompleteProfilePage = () => {
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;
  return isLoadingUser ? (
    <Loading />
  ) : user ? (
    <Navigate to={"/"} replace={true} />
  ) : (
    <CompleteProfileForm />
  );
};

export default CompleteProfilePage;
