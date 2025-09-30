import DashboardPanelLayout from "./DashboardPanelLayout";
import SideBarLinks from "../components/owner/side-bar/SideBarLinks";
import { useState } from "react";
import ModalSideBar from "../ui/ModalSideBar";
const OwnerLayout = () => {
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

export default OwnerLayout;
