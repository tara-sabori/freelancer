import { useEffect, useState } from "react";
import {
  PiCardsThreeFill,
  PiCirclesThreePlusDuotone,
  PiHouseDuotone,
  PiStackBold,
  PiUsersThreeDuotone,
} from "react-icons/pi";
import { Link, useLocation } from "react-router";

const SideBarLinks = ({ onClose }) => {
  const pathName = useLocation().pathname;
  const [prevPath, setPrevPath] = useState(pathName);
  useEffect(() => {
    if (prevPath !== pathName) onClose();
  }, [prevPath, pathName]);

  const links = [
    { title: "داشبورد", path: "/admin/dashboard", icon: <PiHouseDuotone /> },
    {
      title: "کاربران",
      path: "/admin/users",
      icon: <PiUsersThreeDuotone className="text-lg" />,
    },
    { title: "پروژه‌ها", path: "/admin/projects", icon: <PiStackBold /> },
    {
      title: "درخواست‌ها",
      path: "/admin/proposals",
      icon: <PiCardsThreeFill />,
    },
    {
      title: "دسته‌بندی",
      path: "/admin/categories",
      icon: <PiCirclesThreePlusDuotone className="text-lg" />,
    },
  ];
  return (
    <ul className="flex flex-col gap-2 p-2">
      {links?.map((link, index) => (
        <li key={index}>
          <Link to={link?.path}>
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
