import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MapContextProvider from "./context/MapContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MapContextProvider>
    <Router>
      <App />
    </Router>
  </MapContextProvider>
  // </React.StrictMode>,
);
