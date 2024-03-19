import Logo from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Logo />
      <NavLink to='/'>
        <h1>Wander Wheels</h1>
      </NavLink>
      <ProfileIcon />
    </nav>
  );
};
export default NavBar;
