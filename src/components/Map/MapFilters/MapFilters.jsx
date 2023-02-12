import React, { useContext } from "react";
import AppContext from "../../../store/AppContext";
import "./MapFilters.style.scss";

const MapFilters = ({ filterActive, setFilterActive }) => {
  const ctx = useContext(AppContext);

  return (
    <div className={`filters ${filterActive ? "active" : ""}`}>
      <h2 onClick={() => setFilterActive((prevState) => !prevState)}>
        Filters{" "}
        <img
          src={require("../../../assets/arrow.png")}
          alt="arrow"
          className={filterActive ? "img_active" : ""}
        />
      </h2>
      <div className="filters_option">
        <label htmlFor="state" className="filters_label">
          Device Offline
        </label>
        <input
          type="checkbox"
          name="state"
          id="state"
          className="filters_input"
          checked={ctx.filterData.state}
          onChange={ctx.filterHandler.bind(this)}
        />
      </div>
      <div className="filters_option">
        <label htmlFor="move" className="filters_label">
          Device moving
        </label>
        <input
          type="checkbox"
          name="move"
          id="move"
          className="filters_input"
          checked={ctx.filterData.move}
          onChange={ctx.filterHandler.bind(this)}
        />
      </div>
      <div className="filters_option">
        <label htmlFor="move" className="filters_label">
          Device speed more than:
        </label>
        <input
          type="number"
          name="speed"
          id="speed"
          min="0"
          className="filters_input"
          value={ctx.deviceSpeed}
          onChange={(ev) => {
            if (ev.target.value === "") {
              ctx.setFilterData({ state: true, move: true });
              return;
            }
            ctx.setFilterData({ state: false, move: false });
            ctx.setDeviceSpeed(ev.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default MapFilters;
