import React, { useContext, useEffect } from "react";
import API_KEY from "../utils/config.js";
import context from "../context/MapContext.jsx";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const { route } = useContext(context);
  let map;
  useEffect(() => {
    L.mapquest.key = API_KEY;
    map = L.mapquest.map("map", {
      center: [0, 0],
      layer: L.mapquest.tileLayer("dark"),
      zoom: 12,
      scrollWheelZoom: false,
    });
    let directions = L.mapquest.directions();
    directions.route({
      locations: route,
    });
  });
  const handleClick = () => {
    map.remove();
    navigate("/");
  };
  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <button onClick={handleClick}>Go Home</button>
    </>
  );
}
