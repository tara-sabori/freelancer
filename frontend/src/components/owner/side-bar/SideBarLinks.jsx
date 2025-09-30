import { PiHouseDuotone, PiStackBold } from "react-icons/pi";
import { Link, useLocation } from "react-router";

const SideBarLinks = ({ onClose }) => {
  const pathName = useLocation().pathname;
  const links = [
    { title: "داشبورد", path: "/owner/dashboard", icon: <PiHouseDuotone /> },
    { title: "پروژه‌ها", path: "/owner/projects", icon: <PiStackBold /> },
  ];
  return (
    <ul className="flex flex-col gap-2 p-2">
      {links?.map((link, index) => (
        <li key={index}>
          <Link to={link?.path} onClick={onClose}>
            <div
              className={`flex items-center gap-4 p-1.5 rounded-md text-sm ${link?.path === pathName ? "text-primary-900 bg-primary-50" : "text-secondary-800"}`}
            >
              <span className="text-base">{link?.icon}</span>
              <span>{link?.title}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideBarLinks;
