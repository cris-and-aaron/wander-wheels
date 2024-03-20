import { useState } from "react";
import RouteContext from "./RouteContext";

const RouteProvider = ({ children }) => {
  const [routeData, setRouteData] = useState(null);

  let contextValues = { routeData, setRouteData };

  return (
    <RouteContext.Provider value={contextValues}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteProvider;
