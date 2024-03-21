import StartInput from "./StartInput";
import EndInput from "./EndInput";
import { useContext, useState } from "react";
import context from "../context/MapContext";
import { useNavigate } from "react-router-dom";
import { handleFetch } from "../utils/utils.js";
import API_KEY from "../utils/config.js";

const MainPage = () => {
  const navigate = useNavigate();
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const { route, setRoute } = useContext(context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await handleFetch(
      `https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${startInput}&to=${endInput}`
    );
    setRoute(
      data[0].route.legs[0].maneuvers.map((el) => [
        Number(el.startPoint.lat),
        Number(el.startPoint.lng),
      ])
    );
    console.log(route.length);
    if (route.length > 50) {
      alert("Route too long");
      return;
    }
    navigate("/map");
    e.target.reset();
  };

  return (
    <>
      <div>
        <form id="inputs" onSubmit={handleSubmit}>
          <StartInput state={startInput} setter={setStartInput} />
          <EndInput state={endInput} setter={setEndInput} />
          <button>Go</button>
        </form>
      </div>
    </>
  );
};
export default MainPage;
