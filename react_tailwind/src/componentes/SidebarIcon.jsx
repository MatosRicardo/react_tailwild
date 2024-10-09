function SidebarIcon({ icon }) {
  return (
    <span className="sidebar-icon">
      {icon}
      <span className="sidebar-tooltip"></span>
    </span>
  );
}

export default SidebarIcon;
