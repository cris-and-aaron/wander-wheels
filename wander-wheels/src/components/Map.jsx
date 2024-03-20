import React, { useContext, useEffect } from "react";
import API_KEY from "../utils/config";
import RouteContext from "../context/RouteContext.jsx";

export default function Map() {
  const { routeData } = useContext(RouteContext);

  useEffect(() => {
    L.mapquest.key = API_KEY;
    const success = (position) => {
      const lat = position.coords.latitude;
      const long = position.coords.longitude;
      let map = L.mapquest.map("map", {
        center: [lat, long],
        layers: L.mapquest.tileLayer("map"),
        zoom: 14,
        zoomControl: false,
      });

      let directionsControl = L.mapquest
        .directionsControl({
          className: "",
          directions: {
            options: {
              timeOverage: 25,
              doReverseGeocode: false,
            },
          },
          directionsLayer: {
            startMarker: {
              title: "Drag to change location",
              draggable: true,
              icon: "marker-start",
              iconOptions: {
                size: "sm",
              },
            },
            endMarker: {
              draggable: true,
              title: "Drag to change location",
              icon: "marker-end",
              iconOptions: {
                size: "sm",
              },
            },
            viaMarker: {
              title: "Drag to change route",
            },
            routeRibbon: {
              showTraffic: true,
            },
            alternateRouteRibbon: {
              showTraffic: true,
            },
            paddingTopLeft: [450, 20],
            paddingBottomRight: [180, 20],
          },
          startInput: {
            compactResults: true,
            disabled: false,
            location: {},
            placeholderText: "Starting point or click on the map...",
            geolocation: {
              enabled: true,
            },
            clearTitle: "Remove starting point",
          },
          endInput: {
            compactResults: true,
            disabled: false,
            location: {},
            placeholderText: "Destination",
            geolocation: {
              enabled: true,
            },
            clearTitle: "Remove this destination",
          },
          addDestinationButton: {
            enabled: true,
            maxLocations: 10,
          },
          routeTypeButtons: {
            enabled: true,
          },
          reverseButton: {
            enabled: true,
          },
          optionsButton: {
            enabled: true,
          },
          routeSummary: {
            enabled: true,
            compactResults: false,
          },
          narrativeControl: {
            enabled: true,
            compactResults: false,
            interactive: true,
          },
        })
        .addTo(map);
    };

    const error = () => {};

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
    });

    // L.mapquest.key = API_KEY;
  }, [routeData]);
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}
