import { useState } from "react";
import { PiPlusBold } from "react-icons/pi";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-secondary-100 rounded-xl p-4 xl:p-7 overflow-hidden">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full cursor-pointer"
      >
        <span className="font-semibold text-sm xl:text-base text-blue-950">
          {title}
        </span>
        <PiPlusBold
          className={`${isOpen && "rotate-45"} transition-all duration-300 ease-in text-blue-950 text-lg`}
        />
      </div>
      <div
        className={`${isOpen ? "max-h-screen  opacity-100 translate-y-2" : "max-h-0 overflow-hidden opacity-0 -translate-y-2"} duration-300 ease-in-out text-secondary-700 text-xs xl:text-sm leading-6`}
      >
        {description}
      </div>
    </div>
  );
};

export default Accordion;
