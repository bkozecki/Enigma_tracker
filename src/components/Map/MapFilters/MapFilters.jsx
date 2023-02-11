import React, { useContext } from "react";
import AppContext from "../../../store/AppContext";
import "./MapFilters.style.scss";

const MapFilters = ({ filterActive, setFilterActive }) => {
  const ctx = useContext(AppContext);

  return (
    <div className={`filters ${filterActive ? "active" : ""}`}>
      <h2>
        Filters{" "}
        <img
          src={require("../../../assets/arrow.png")}
          alt="arrow"
          className={filterActive ? "img_active" : ""}
          onClick={() => setFilterActive((prevState) => !prevState)}
        />
      </h2>
      <div className={`filters_option ${filterActive ? "option_active" : ""}`}>
        <label htmlFor="state" className="filters_label">
          Device Offline
        </label>
        <input
          type="checkbox"
          name="state"
          id="state"
          className="filters_input"
          checked={ctx.filterChecked.state}
          onChange={ctx.filterHandler.bind(this)}
        />
      </div>
      <div className={`filters_option ${filterActive ? "option_active" : ""}`}>
        <label htmlFor="move" className="filters_label">
          Device moving
        </label>
        <input
          type="checkbox"
          name="move"
          id="move"
          className="filters_input"
          checked={ctx.filterChecked.move}
          onChange={ctx.filterHandler.bind(this)}
        />
      </div>
    </div>
  );
};

export default MapFilters;
