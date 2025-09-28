import { useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import SubmitButton from "../../../../ui/SubmitButton";
import { useState } from "react";
import CreateProjectTag from "./createProjectTag";
import DatePickerField from "../../../../ui/DatePickerField";
import RHFSelect from "../../../../ui/RHFSelect";
import useCategories from "../../../../hooks/useCategories";
import TextAreaField from "../../../../ui/TextAreaField";
import useCreateProject from "../../../../hooks/useCreateProject";
import useEditProject from "../../../../hooks/useEditProject";

const CreateProjectForm = ({ onClose, project = {} }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: project?.title,
      description: project?.description,
      budget: project?.budget,
      category: project?.category?._id,
    },
  });

  const [tagsList, setTagsList] = useState(project?.tags || []);
  const [date, setDate] = useState(project?.deadline || "");
  const { categories, isLoadingCategory } = useCategories();

  const { isCreating, createProjectFunction } = useCreateProject();
  const { isEditing, editProjectFunction } = useEditProject();

  const onSubmit = (data) => {
    const formData = {
      deadline: date,
      tags: tagsList,
      ...data,
    };
    console.log(formData);
    if (project?._id) {
      const data = editProjectFunction(
        { id: project?._id, formData },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
      console.log(data);
    } else {
      const data = createProjectFunction(formData, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
      console.log(data);
    }
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"عنوان"}
        name={"title"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          minLength: {
            value: 4,
            message: "عنوان پروژه باید بیشتر از 4 کاراکتر باشد.",
          },
        }}
      />
      <TextAreaField
        label={"توضیحات"}
        name={"description"}
        errors={errors}
        register={register}
        required
        validationSchema={{ required: "این فیلد الزامی است." }}
      />

      <TextField
        label={"بودجه"}
        name={"budget"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />

      <DatePickerField
        date={date}
        setDate={setDate}
        label={"تاریخ پایان"}
        required
      />

      <CreateProjectTag tagsList={tagsList} setTagsList={setTagsList} />

      <RHFSelect
        label={"دسته‌بندی"}
        name={"category"}
        register={register}
        errors={errors}
        required
        options={categories?.map((cat) => ({
          label: cat?.title,
          value: cat?._id,
        }))}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        isLoading={isLoadingCategory}
      />
      <SubmitButton disabled={isCreating || isEditing}>
        {project?._id ? <span>ویرایش پروژه</span> : <span>ایجاد پروژه</span>}
      </SubmitButton>
    </form>
  );
};

export default CreateProjectForm;
