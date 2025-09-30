import useSignOut from "../hooks/useSignOut";
import { useNavigate } from "react-router";
import Modal from "./Modal";

const ConfirmSignOut = ({ onClose }) => {
  const { isPending, signOutFn } = useSignOut();
  const navigate = useNavigate();
  return (
    <Modal title={"خروج از حساب کاربری"} onClose={onClose}>
      <div className="space-y-8 py-2">
        <p className="font-semibold text-sm">
          از خروج ار حساب کاربری خود اطمینان دارید؟
        </p>
        <div className="flex items-center gap-8">
          <button
            onClick={() =>
              signOutFn(undefined, {
                onSuccess: () => {
                  onClose();
                  navigate("/");
                },
              })
            }
            disabled={isPending}
            className="rounded-md bg-error p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-400"
          >
            بله
          </button>
          <button
            onClick={onClose}
            disabled={isPending}
            className="rounded-md bg-primary-900 p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed"
          >
            خیر
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmSignOut;
