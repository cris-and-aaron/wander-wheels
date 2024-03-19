import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default App;
