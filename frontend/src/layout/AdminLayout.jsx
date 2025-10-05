import { useState } from "react";
import DashboardPanelLayout from "./DashboardPanelLayout";
import ModalSideBar from "../ui/ModalSideBar";
import SideBarLinks from "../components/admin/side-bar/SideBarLinks";

const AdminLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <DashboardPanelLayout openMenu={() => setIsOpenMenu(true)}>
      {isOpenMenu && (
        <ModalSideBar onClose={() => setIsOpenMenu(false)} title={"منو"}>
          <SideBarLinks onClose={() => setIsOpenMenu(false)} />
        </ModalSideBar>
      )}
      <div className="w-[150px] hidden md:block bg-secondary-50 border-l border-secondary-200">
        <SideBarLinks onClose={() => setIsOpenMenu(false)} />
      </div>
    </DashboardPanelLayout>
  );
};

export default AdminLayout;
