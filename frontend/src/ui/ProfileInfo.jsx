const ProfileInfo = ({ title, value }) => {
  return (
    <div className="flex gap-3">
      <span className="text-sm text-secondary-500 whitespace-nowrap">
        {title} :
      </span>
      <p className="text-sm text-secondary-700">{value || "-"}</p>
    </div>
  );
};

export default ProfileInfo;
