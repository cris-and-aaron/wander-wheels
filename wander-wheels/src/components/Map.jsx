import React, { useEffect } from "react";
import API_KEY from "../utils/config.js";

export default function Map({ route }) {
  useEffect(() => {
    const makeMap = async () => {
      try {
        L.mapquest.key = API_KEY;
        L.mapquest.map("map", {
          center: [17, -13],
          layers: L.mapquest.tileLayer("map"),
          zoom: 12,
          zoomControl: false,
        });
        console.log(route);
        var directions = L.mapquest.directions();
        directions.route({
          locations: route,
        });
      } catch (e) {
        console.error(e);
      }
    };
    makeMap();
  }, [route]);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}
