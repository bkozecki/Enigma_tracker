import React from "react";
import MapContent from "./MapContent/MapContent";

import "./Map.style.scss";
import MapFilters from "./MapFilters/MapFilters";

const Map = () => {
  return (
    <div className="map">
      <div className="map_sidebar">
        <MapFilters />
        <div className="logo">
          Tracker
          <img
            src={require("../../assets/tracking.png")}
            className="logo_img"
            alt="logo"
          />
        </div>
      </div>
      <div id="map" className="map_content">
        <MapContent />
      </div>
    </div>
  );
};

export default Map;
