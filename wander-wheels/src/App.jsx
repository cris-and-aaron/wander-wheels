import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import Map from "./components/Map";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage"
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<Map />}></Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  );
};

export default App;
