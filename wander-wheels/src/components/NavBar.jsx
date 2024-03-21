import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Logo />
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </nav>
  );
};
export default NavBar;
