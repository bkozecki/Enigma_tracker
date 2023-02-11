import React, { useState } from "react";
import MapContent from "./MapContent/MapContent";

import "./Map.style.scss";
import MapFilters from "./MapFilters/MapFilters";

const Map = () => {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className="map">
      <div className={`map_sidebar ${filterActive ? "active" : ""}`}>
        <MapFilters
          filterActive={filterActive}
          setFilterActive={setFilterActive}
        />
        <div className="logo">
          Tracker
          <img
            src={require("../../assets/tracking.png")}
            className="logo_img"
            alt="logo"
          />
        </div>
      </div>
      <div
        id="map"
        className={`map_content ${!filterActive ? "map_active" : ""}`}
      >
        <MapContent filterActive={filterActive} />
      </div>
    </div>
  );
};

export default Map;
