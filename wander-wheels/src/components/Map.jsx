import React, { useEffect } from "react";
import API_KEY from "../config";

export default function Map() {
  useEffect(() => {
    const success = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude; // Fix typo: position.coords.longitude instead of latitude
      const map = L.mapquest.map("map", {
        center: [lat, long],
        layers: L.mapquest.tileLayer("map"),
        zoom: 12,
      });
    };

    const error = () => {};

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });

    L.mapquest.key = API_KEY;
  }, []);
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}
