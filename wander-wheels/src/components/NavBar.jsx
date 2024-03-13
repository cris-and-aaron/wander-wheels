import Logo from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <Logo />
      <h1>Wander Wheels</h1>
      <ProfileIcon />
    </nav>
  );
};
export default NavBar;
