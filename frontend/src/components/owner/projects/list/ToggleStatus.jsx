import useChangeProjectStatus from "../../../../hooks/useChangeProjectStatus";

const ToggleStatus = ({ status, projectId }) => {
  const { isChanging, changeStatus } = useChangeProjectStatus();
  const clickHandler = async () => {
    const formData = {
      status: status === "OPEN" ? "CLOSED" : "OPEN",
    };
    console.log(formData, projectId);
    try {
      const data = await changeStatus({ id: projectId, formData });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <span className="text-xs text-gray-700 w-[40px]">
        {status === "OPEN" ? "باز" : "بسته"}
      </span>

      <button
        type="button"
        onClick={clickHandler}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
          status === "OPEN" ? "bg-primary-900" : "bg-gray-300"
        } disabled:cursor-not-allowed`}
        disabled={isChanging}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            status === "CLOSED"
              ? "-translate-x-6 rtl:-translate-x-6"
              : "-translate-x-1 rtl:translate-x-6"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleStatus;
