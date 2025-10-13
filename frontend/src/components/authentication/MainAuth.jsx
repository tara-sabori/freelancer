import { useState } from "react";
import { Navigate, useSearchParams } from "react-router";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/AuthServices";
import NotFound from "../../pages/NotFound";
import useUser from "../../hooks/useUser";
import Loading from "../../ui/Loading";

const MainAuth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");
  const [currentStep, setCurrentStep] = useState(step || "1");
  const oldPhoneNumber = sessionStorage.getItem("phoneNumber");
  const [phoneNumber, setPhoneNumber] = useState(oldPhoneNumber || "");
  const {
    isPending,
    mutateAsync,
    data: resOTP,
  } = useMutation({
    mutationFn: getOtp,
  });

  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;

  const sendOTP = async () => {
    const formData = { phoneNumber };
    const oldPhone = sessionStorage.getItem("phoneNumber");
    const oldExpiry = Number(sessionStorage.getItem("time")) || 0;
    const now = Date.now();

    if (
      phoneNumber === oldPhoneNumber &&
      currentStep === "1" &&
      oldExpiry > now
    ) {
      searchParams.set("step", "2");
      setSearchParams(searchParams);
      setCurrentStep("2");
      return;
    }
    if (currentStep === "1" && phoneNumber !== oldPhone) {
      sessionStorage.removeItem("time");
      sessionStorage.removeItem("phoneNumber");
    }
    console.log(formData);
    try {
      const data = await mutateAsync(formData);
      const newExpiry = Date.now() + 90000;
      sessionStorage.setItem("time", String(newExpiry));
      sessionStorage.setItem("phoneNumber", phoneNumber);
      console.log(data);
      if (currentStep === "1") {
        setCurrentStep("2");
        searchParams.set("step", "2");
        setSearchParams(searchParams);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoadingUser) return <Loading />;
  if (user) return <Navigate to="/" replace />;
  return (
    <div className="mx-auto sm:max-w-sm p-3 pt-10">
      {currentStep === "1" ? (
        <SendOtpForm
          onSubmit={sendOTP}
          isPending={isPending}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
      ) : currentStep === "2" ? (
        <CheckOtpForm
          onResendOTP={sendOTP}
          phoneNumber={phoneNumber}
          setCurrentStep={setCurrentStep}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default MainAuth;
