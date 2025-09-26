import { Outlet } from "react-router";
import MainSideBar from "../components/owner/side-bar/MainSideBar";
const OwnerLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="p-5 py-3 bg-secondary-50 border-b border-secondary-200">
        header
      </div>
      <div className="flex flex-1 min-h-0">
        <MainSideBar />
        <div className="flex-1 p-5 bg-secondary-0 overflow-y-auto min-h-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
