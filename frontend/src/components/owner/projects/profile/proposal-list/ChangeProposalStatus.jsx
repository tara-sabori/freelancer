import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import RHFSelect from "../../../../../ui/RHFSelect";
import SubmitButton from "../../../../../ui/SubmitButton";
import useChangeProposalStatus from "../../../../../hooks/useChangeProposalStatus";

const ChangeProposalStatus = ({ proposalId, onClose }) => {
  const { id: projectId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isChanging, changeProposalStatusFn } = useChangeProposalStatus();

  const onSubmit = (data) => {
    console.log(data);
    const responseData = changeProposalStatusFn(
      {
        id: proposalId,
        formData: { projectId, ...data },
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };
  const options = [
    { label: "تایید", value: 2 },
    { label: "رد", value: 0 },
  ];
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        label={"تغییر وضعیت"}
        name={"status"}
        required
        register={register}
        errors={errors}
        validationSchema={{
          required: "این فیلد الزامی است.",
        }}
        options={options}
      />
      <SubmitButton disabled={isChanging}>
        <span>تایید</span>
      </SubmitButton>
    </form>
  );
};

export default ChangeProposalStatus;
