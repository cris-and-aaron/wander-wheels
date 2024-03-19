import StartInput from "./StartInput";
import EndInput from "./EndInput";
import Map from "./Map";
import { useState } from "react";
const MainPage = () => {
  const [startInput, setStartInput] = useState("");
  const [endInput, setEndInput] = useState("");

  return (
    <>
      <div id="inputs">
        <StartInput state={startInput} />
        <EndInput state={endInput} />
      </div>
      <Map />
    </>
  );
};
export default MainPage;
