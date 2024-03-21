import StartInput from "./StartInput";
import EndInput from "./EndInput";
import Map from "./Map";
import { useState } from "react";
import {handleFetch} from "../utils/utils.js";
import testData from "../json/firstCall.json";
import API_KEY from "../utils/config.js";

const MainPage = () => {
    const [startInput,setStartInput] = useState("");
    const [endInput,setEndInput] = useState("");
    const [route, setRoute] = useState(testData.route.legs[0].maneuvers.map(el => [el.startPoint.lat,el.startPoint.lng]));
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {start,end} = Object.fromEntries(new FormData(e.target));
      const [data,error] = await handleFetch(`https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${start}&to=${end}`)
      setRoute(data.route.legs[0].maneuvers.map(el => {
        console.log(el.startPoint.lat, el.startPoint.lng);
        return [el.startPoint.lat,el.startPoint.lng]

      }));
      console.log(data);
      e.target.reset();
    };
    
    return (
      <>
      <div>
        <form id="inputs" onSubmit={handleSubmit}>
          <StartInput state={startInput} />
          <EndInput state={endInput} />
          <button>Go</button>
        </form>
      </div>
      <Map route={route}/>
      </>
    );
}
export default MainPage;
