import { useState } from "react";
import MapContext from "./MapContext";

export default function MapContextProvider({children}) {
    const [route, setRoute] = useState()
    const context = {route, setRoute};
    return <MapContext.Provider value={context}>
        {children}
    </MapContext.Provider>
}
