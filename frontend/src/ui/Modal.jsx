import useOutsideClick from "../utils/useOutsideClick";

const Modal = ({ children, onClose }) => {
  const ref = useOutsideClick(onClose);
  return (
    <div
      className="backdrop-blur-sm fixed top-0 left-0
           w-full h-screen bg-secondary-800/25 z-50"
    >
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-500 ease-out
        w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
