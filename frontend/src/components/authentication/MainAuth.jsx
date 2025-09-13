import React, { useState } from "react";
import { useSearchParams } from "react-router";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/AuthServices";

const MainAuth = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const step = searchParams.get("step");
  const [currentStep, setCurrentStep] = useState(step || "1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOTP = async () => {
    const formData = { phoneNumber };
    console.log(formData);
    try {
      const data = await mutateAsync(formData);
      console.log(data);
      if (step === "1") {
        setCurrentStep("2");
        setSearchParams(new URLSearchParams("?step=2"));
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <p>not found</p>
      )}
    </div>
  );
};

export default MainAuth;
