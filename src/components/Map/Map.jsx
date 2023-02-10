import React from "react";
import MapContent from "./MapContent/MapContent";

import "./Map.style.scss";
import MapFilters from "./MapFilters/MapFilters";

const Map = () => {
  return (
    <div className="map">
      <div className="map_filters">
        <MapFilters />
      </div>
      <div id="map" className="map_content">
        <MapContent />
      </div>
    </div>
  );
};

export default Map;
