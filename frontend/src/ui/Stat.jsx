import { toPersianNumbers } from "../utils/toPersianNumbers";

const Stat = ({ title, value, icon, className }) => {
  return (
    <div className="p-2 rounded-md space-y-4 bg-secondary-50 shadow-sm max-w-[260px]">
      <div className="flex items-center gap-1.5">
        <div className={`p-1.5 rounded-full ${className}`}>{icon}</div>
        <span className="text-sm text-secondary-600">{title}</span>
      </div>
      <p className="text-center">{toPersianNumbers(value)}</p>
    </div>
  );
};

export default Stat;
