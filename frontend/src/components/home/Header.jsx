import { Link } from "react-router";
import { PiSignOut, PiUserDuotone } from "react-icons/pi";
import { useState } from "react";
import ConfirmSignOut from "../../ui/ConfirmSignOut";
import useUser from "../../hooks/useUser";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userData, isLoadingUser } = useUser();
  const user = userData?.user || null;
  console.log(user);
  return (
    <header className="px-4 2xl:px-0 sticky top-4">
      <div className="container bg-secondary-300/40 backdrop-blur-3xl rounded-full p-4 px-6 md:px-10 flex items-center justify-between">
        <h1 className="text-blue-950 font-semibold text-shadow-sm">فریلنسو</h1>
        {!isLoadingUser && (
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <Link to={`/${user?.role?.toLocaleLowerCase()}`}>
                  <PiUserDuotone
                    className="text-lg cursor-pointer"
                    title="پروفایل من"
                  />
                </Link>
                <PiSignOut
                  onClick={() => setIsOpen(true)}
                  className="hover:text-error text-lg cursor-pointer"
                  title="خروج"
                />
              </div>
            ) : (
              <Link
                to={"/auth"}
                className="bg-blue-950/80 p-2 rounded-full text-sm text-secondary-100"
              >
                ورود/ثبت‌نام
              </Link>
            )}
          </div>
        )}
      </div>
      {isOpen && <ConfirmSignOut onClose={() => setIsOpen(false)} />}
    </header>
  );
};

export default Header;
