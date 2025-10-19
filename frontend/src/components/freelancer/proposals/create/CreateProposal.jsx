import { useForm } from "react-hook-form";
import TextField from "../../../../ui/TextField";
import TextAreaField from "../../../../ui/TextAreaField";
import SubmitButton from "../../../../ui/SubmitButton";
import useCreateProposal from "../../../../hooks/useCreateProposal";

const CreateProposal = ({ projectId, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isPending, createProposalFn } = useCreateProposal();

  const onSubmit = (data) => {
    const formData = { projectId, ...data };
    console.log(formData);
    const responseData = createProposalFn(formData, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
    console.log(responseData);
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label={"زمان تحویل(روز)"}
        name={"duration"}
        type="number"
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />

      <TextAreaField
        label={"توضیحات"}
        name={"description"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
      />

      <TextField
        label={"هزینه (تومان)"}
        name={"price"}
        errors={errors}
        register={register}
        required
        validationSchema={{
          required: "این فیلد الزامی است.",
          pattern: {
            value: /^\d+$/,
            message: "فقط عدد مجاز است.",
          },
        }}
        inputMode="numeric"
      />

      <SubmitButton disabled={isPending}>ثبت</SubmitButton>
    </form>
  );
};

export default CreateProposal;
