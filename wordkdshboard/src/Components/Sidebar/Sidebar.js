import React from "react";
import "./Sidebar.css";
import logo from "../../assets/angularJs.jpg";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>CREATIVE TIM</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-th"></i>
          <a href="#">Dashboard</a>
        </div>

        <div className="sidebar__link">
          <i className="fa fa-table"></i>
          <a href="#">Table List</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Topography</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-chevron-right"></i>
          <a href="#">Icons</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-map-marker"></i>
          <a href="#">Maps</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-bell"></i>
          <a href="#">Notifications</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-angle-double-up"></i>
          <a href="#">Upgrade To Pro</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
