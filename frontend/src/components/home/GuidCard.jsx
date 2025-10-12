const GuidCard = ({ icon, title, description }) => {
  return (
    <div className="bg-secondary-100 transition-all duration-300 ease-in-out shadow-sm hover:shadow-lg hover:-translate-y-2 rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-blue-950 text-sm font-semibold">{title}</span>
      </div>
      <p className="text-xs text-secondary-600 leading-6">{description}</p>
    </div>
  );
};

export default GuidCard;
