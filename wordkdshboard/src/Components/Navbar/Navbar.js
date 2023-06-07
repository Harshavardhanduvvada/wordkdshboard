import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>

      <div className="navbar__left">
        <a href="#">Dashboard</a>
      </div>
      <div className="navbar__right">
        <a href="https://fontawesome.com/v4/icons/">
          <i className="fa fa-search" aria-hidden="true"></i>
        </a>
        <a href="https://fontawesome.com/v4/icons/">
          <i class="fa fa-user" aria-hidden="true"></i>
        </a>
        <a href="https://fontawesome.com/v4/icons/">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
        </a>
        <a href="https://fontawesome.com/v4/icons/">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
