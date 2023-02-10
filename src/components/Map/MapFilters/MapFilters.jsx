import React, { useContext } from "react";
import AppContext from "../../../store/AppContext";
import "./MapFilters.style.scss";

const MapFilters = () => {
  const ctx = useContext(AppContext);

  console.log(ctx.filterChecked);

  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filters_option">
        <label htmlFor="state" className="filters_label">
          Device Online
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
      <div className="filters_option">
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
