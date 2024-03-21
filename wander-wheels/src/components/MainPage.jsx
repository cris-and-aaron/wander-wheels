import StartInput from "./StartInput";
import EndInput from "./EndInput";
import Map from "./Map";
import { useContext, useState } from "react";
import { handleFetch } from "../utils/utils.js";
import API_KEY from "../utils/config.js";
import RouteContext from "../context/RouteContext.jsx";

const MainPage = () => {
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");
  const { setRouteData } = useContext(RouteContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { start, end } = Object.fromEntries(new FormData(e.target));
    const data = await handleFetch(
      `https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${start}&to=${end}`
    );
    setRouteData(data);
    console.log(data);
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
      <Map />
    </>
  );
};
export default MainPage;
