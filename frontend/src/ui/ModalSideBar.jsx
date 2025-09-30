import { PiX } from "react-icons/pi";
import useOutsideClick from "../utils/useOutsideClick";

const ModalSideBar = ({ title, children, onClose, className = "" }) => {
  const ref = useOutsideClick(onClose);

  return (
    <div
      className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800/25 z-50"
    >
      <div
        ref={ref}
        className={`fixed top-0 right-0
     bg-secondary-0 shadow-lg transition-all duration-500 ease-out
        w-[250px] h-full ${className}`}
      >
        <div className="flex items-center justify-between w-full p-1.5 border-b border-secondary-300">
          <span className="text-sm text-shadow-secondary-400 font-semibold">
            {title}
          </span>
          <PiX className="cursor-pointer" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalSideBar;
