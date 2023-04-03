import { NavLink } from "react-router-dom";
import isActiveRoute from "../../helpers/isActiveRoute";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success p-2 text-white bg-opacity-75">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={`${isActiveRoute} nav-link`} to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`${isActiveRoute} nav-link`} to="categories">
            Library
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`${isActiveRoute} nav-link`} to="setting">
            Setting
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
