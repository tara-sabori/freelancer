import React from "react";

const ConfirmDelete = ({ resourceName, onClose, onConfirm, disabled }) => {
  return (
    <div className="space-y-8 py-2">
      <p className="font-semibold text-sm">
        آیا با حذف {resourceName} موافق هستید؟
      </p>
      <div className="flex items-center gap-8">
        <button
          onClick={onConfirm}
          className="rounded-md bg-error p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed disabled:bg-secondary-400"
          disabled={disabled}
        >
          تایید
        </button>
        <button
          onClick={onClose}
          className="rounded-md bg-primary-900 p-1.5 w-[60px] text-center text-sm text-secondary-50 cursor-pointer disabled:cursor-not-allowed"
          disabled={disabled}
        >
          لغو
        </button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
