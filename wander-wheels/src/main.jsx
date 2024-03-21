import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouteProvider from "./context/RouteProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouteProvider>
    <Router>
      <App />
    </Router>
  </RouteProvider>
  // </React.StrictMode>,
);
