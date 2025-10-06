import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import RHFSelect from "../../../ui/RHFSelect";
import SubmitButton from "../../../ui/SubmitButton";
import useChangeUserStatus from "../../../hooks/useChangeUserStatus";

const ChangeUserStatus = ({ userId, onClose }) => {
  const statusList = [
    { label: "تایید", value: 2 },
    { label: "رد", value: 0 },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { changeStatusFn, isChanging } = useChangeUserStatus();

  const onSubmit = (data) => {
    console.log(data);
    const responseData = changeStatusFn(
      { id: userId, formData: data },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label={"وضعیت حساب کاربر"}
        name={"status"}
        errors={errors}
        register={register}
        options={statusList}
      />
      <SubmitButton disabled={isChanging}>ثبت</SubmitButton>
    </form>
  );
};

export default ChangeUserStatus;
