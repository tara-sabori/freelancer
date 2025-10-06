import { useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import TextAreaField from "../../../../ui/TextAreaField";
import SubmitButton from "../../../../ui/SubmitButton";
import useCreateCategory from "../../../../hooks/useCreateCategory";
import useUpdateCategory from "../../../../hooks/useUpdateCategory";

const CreateCategoryForm = ({ onClose, data = {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: data?.title || "",
      englishTitle: data?.englishTitle || "",
      description: data?.description || "",
    },
  });

  const { createCategoryFn, isCreating } = useCreateCategory();
  const { updateCategoryFn, isUpdating } = useUpdateCategory();

  const onSubmit = (myData) => {
    const formData = {
      type: "project",
      ...myData,
    };
    console.log(formData);
    if (data?._id) {
      const responseData = updateCategoryFn(
        { id: data?._id, formData },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      const responseData = createCategoryFn(formData, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"نام فارسی"}
        name={"title"}
        required
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^[آاآبپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی\u06F0-\u06F9\s]+$/,
            message: "فقط حروف فارسی مجاز است.",
          },
          minLength: {
            value: 3,
            message: "باید بیشتر از دو کاراکتر باشد.",
          },
        }}
        errors={errors}
      />

      <TextField
        label={"نام انگلیسی"}
        name={"englishTitle"}
        required
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^[A-Za-z\u06F0-\u06F9\s]+$/,
            message: "فقط حروف انگلیسی مجاز است.",
          },
          minLength: {
            value: 3,
            message: "باید بیشتر از دو کاراکتر باشد.",
          },
        }}
        errors={errors}
      />

      <TextAreaField
        label={"توضیحات"}
        name={"description"}
        required
        register={register}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        errors={errors}
      />

      <SubmitButton disabled={isCreating || isUpdating}>
        {data?._id ? <span>ویرایش</span> : <span>ثبت</span>}
      </SubmitButton>
    </form>
  );
};

export default CreateCategoryForm;
