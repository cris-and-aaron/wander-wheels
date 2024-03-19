import StartInput from "./StartInput";
import EndInput from "./EndInput";
import { useState } from "react";
import {handleFetch} from "../utils/utils.js";
import API_KEY from "../utils/config.js"

const MainPage = () => {
    const [startInput,setStartInput] = useState("");
    const [endInput,setEndInput] = useState("");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {start,end} = Object.fromEntries(new FormData(e.target));
      const data = await handleFetch(`https://www.mapquestapi.com/directions/v2/route?key=${API_KEY}&from=${start}&to=${end}`)
      console.log(data);
      e.target.reset();
    };
    
    return (
      <div>
        <form id="inputs" onSubmit={handleSubmit}>
          <StartInput state={startInput} />
          <EndInput state={endInput} />
          <button>Go</button>
        </form>
      </div>
    );
}
export default MainPage;