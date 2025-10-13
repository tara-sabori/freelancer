import { useState } from "react";
import { useNavigate } from "react-router";
import InputForm from "../../../ui/InputForm";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../../services/AuthServices";
import toast from "react-hot-toast";
import SubmitButton from "../../../ui/SubmitButton";

const CompleteProfileForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("OWNER");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = { name, email, role };
    try {
      const { user, message } = await mutateAsync(formData);
      console.log(user);
      toast.success(message);
      if (user?.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در انتظار تایید است.");
        return;
      }
      if (user?.role === "OWNER") {
        navigate("/owner");
      } else {
        navigate("/freelancer");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "مشکلی رخ داده است.");
    }
  };
  return (
    <div className="!space-y-4 p-5 mx-auto w-full sm:w-[400px]">
      <p className="text-sm font-semibold text-secondary-500">
        لطفا اطلاعات خود را تکمیل کنید.
      </p>
      <form onSubmit={submitHandler} className="!space-y-4">
        <InputForm
          label={"نام"}
          name={"name"}
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <InputForm
          label={"ایمیل"}
          name={"email"}
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              type="radio"
              name="role"
              id="OWNER"
              value="OWNER"
              checked={role === "OWNER"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="OWNER"
              className="text-secondary-600 text-sm cursor-pointer"
            >
              کارفرما
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="cursor-pointer"
              type="radio"
              name="role"
              id="FREELANCER"
              value="FREELANCER"
              checked={role === "FREELANCER"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label
              htmlFor="FREELANCER"
              className="text-secondary-600 text-sm cursor-pointer"
            >
              فریلنسر
            </label>
          </div>
        </div>
        <SubmitButton disabled={isPending}>ثبت</SubmitButton>
      </form>
    </div>
  );
};

export default CompleteProfileForm;
