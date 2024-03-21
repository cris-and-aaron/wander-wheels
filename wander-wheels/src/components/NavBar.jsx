import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/map">Map</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
