import { PiCaretLeftLight } from "react-icons/pi";
import useMoveBack from "../../hooks/useMoveBack";
import SubmitButton from "../../ui/SubmitButton";

const SendOtpForm = ({ onSubmit, isPending, setPhoneNumber, phoneNumber }) => {
  const submitHandle = (e) => {
    e?.preventDefault();
    onSubmit();
  };
  const moveBack = useMoveBack();
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          className="flex items-center gap-1 text-secondary-800 cursor-pointer"
          onClick={moveBack}
        >
          <span className="text-sm">بازگشت</span>
          <PiCaretLeftLight />
        </button>
      </div>
      <form className="flex flex-col gap-4 px-4" onSubmit={submitHandle}>
        <div className="flex flex-col gap-4">
          <label htmlFor="t1" className="text-secondary-800 text-sm">
            شماره موبایل
          </label>
          <input
            id="t1"
            value={phoneNumber}
            onChange={(e) => {
              const newValue = e.target.value;
              if (/^\d*$/.test(newValue)) {
                setPhoneNumber(e.target.value);
              }
            }}
            className="border border-secondary-400 p-1.5 w-full rounded-md outline-none focus:shadow-sm bg-secondary-50"
            type="text"
          />
        </div>
        <SubmitButton
          disabled={isPending || !phoneNumber || phoneNumber?.length !== 11}
        >
          ارسال کد تایید
        </SubmitButton>
      </form>
    </div>
  );
};

export default SendOtpForm;
