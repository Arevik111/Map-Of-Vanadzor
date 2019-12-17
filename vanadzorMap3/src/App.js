import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 40.8127778,
    longitude: 44.4883333,
    width: "100vw",
    height: "100vh",
    zoom: 13
  });
 let token ="pk.eyJ1IjoiYXJldmlrIiwiYSI6ImNrNDV3NTk3czBkMmozcG52ZnI2OXFkbWMifQ.khjLJHxt1BLUep5PjKhTqQ";

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
		onViewportChange={viewport => {
          setViewport(viewport);
        }}
		mapStyle="mapbox://styles/arevik/ck45zkprs0zpx1cppi9f0kdkj"
        >
      </ReactMapGL>
    </div>
  );
}
