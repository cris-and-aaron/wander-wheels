import Card from "./Card";
import map from "../assets/map.png";
import car2 from "../assets/car2.png";
import route from "../assets/route.png";
import { NavLink } from "react-router-dom";
const MainPage = () => {
  return (
    <>
      <div id="hero">
        <div id="inputs">
          <div className="hero">
            <h4>WANDER. EXPLORE. DISCOVER</h4>
            <h1>Wander Wheels</h1>
            <small>
              Wander Wheels is for people wanting a new found sense of
              exploration.
            </small>
          </div>
          <NavLink to="/map">
            <button>Go to map</button>
          </NavLink>
        </div>
      </div>
      <div className="container">
        <Card img={map} />
        <Card img={car2} />
        <Card img={route} />
      </div>
    </>
  );
};
export default MainPage;
