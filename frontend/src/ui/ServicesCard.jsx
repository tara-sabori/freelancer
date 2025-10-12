const ServicesCard = ({ icon, title, text }) => {
  return (
    <div
      className="flex items-center gap-3 bg-secondary-100 p-4 rounded-xl transition-all ease-in-out hover:shadow-md hover:shadow-secondary-200
     hover:scale-102"
    >
      <div className="bg-secondary-50 p-4 flex items-center justify-center rounded-md basis-[200px]">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="lg:text-lg font-semibold text-blue-950">{title}</h3>
        <p className="text-xs text-justify leading-5 text-secondary-700">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
