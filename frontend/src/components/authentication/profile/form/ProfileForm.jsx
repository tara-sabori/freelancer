import { useNavigate } from "react-router";
import SubmitButton from "../../../../ui/SubmitButton";
import { useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import useUpdateProfile from "../../../../hooks/useUpdateProfile";

const ProfileForm = ({ user = {} }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      // role: user?.role,
      name: user?.name || "",
      phoneNumber: user?.phoneNumber || "",
      email: user?.email || "",
      biography: user?.biography || "",
      // avatar: user?.avatarUrl || null,
    },
  });
  const { updateProfileFn, isUpdating } = useUpdateProfile();
  const onSubmit = (data) => {
    console.log(data);
    const responseData = updateProfileFn(
      { id: user?._id, formData: data },
      {
        onSuccess: () => {
          navigate(-1);
          reset();
        },
      },
    );
  };
  console.log(user);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="!space-y-4">
      <TextField
        label={"نام"}
        name={"name"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <TextField
        label={"ایمیل"}
        name={"email"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <TextField
        label={"تلفن همراه"}
        name={"phoneNumber"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />
      <TextField
        label={"حوزه تخصصی"}
        name={"biography"}
        errors={errors}
        register={register}
        validationSchema={{
          maxLength: {
            value: 30,
            message: "حداکثر 30 کاراکتر مجاز است.",
          },
        }}
      />
      {/* <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <input
            className="cursor-pointer"
            type="radio"
            name="role"
            id="OWNER"
            value="OWNER"
            checked={watch("role") === "OWNER"}
            {...register("role", { required: "انتخاب نقش ضروری است" })}
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
            checked={watch("role") === "FREELANCER"}
            {...register("role", { required: "انتخاب نقش ضروری است" })}
          />
          <label
            htmlFor="FREELANCER"
            className="text-secondary-600 text-sm cursor-pointer"
          >
            فریلنسر
          </label>
          {errors && errors["role"] && (
            <span className="text-error block text-sm mt-2">
              {errors["role"]?.message}
            </span>
          )}
        </div>
      </div> */}
      <SubmitButton disabled={isUpdating}>ثبت</SubmitButton>
    </form>
  );
};

export default ProfileForm;
