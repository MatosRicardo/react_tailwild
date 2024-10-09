import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import SidebarIcon from "./SidebarIcon";

function Sidebar() {
  return (
    <div className="fixed top-0 flex flex-col h-screen w-16 bg-gray-700 text-white">
      <SidebarIcon icon={<BsGearFill size={28} />} />
      <SidebarIcon icon={<BsFillLightningFill size={32} />} />
      <SidebarIcon icon={<BsPlus size={38} />} />
      <SidebarIcon icon={<FaPoo size={32} />} />
      <SidebarIcon icon={<FaFire size={28} />} />
    </div>
  );
}

export default Sidebar;
