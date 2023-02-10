import React, { useContext } from "react";
import { Marker, Popup } from "react-leaflet";
import { iconUnavailable, iconAvailable } from "../../../utlis/utils";
import AppContext from "../../../store/AppContext";

import "./MapItems.style.scss";

const MapItems = ({ data }) => {
  return (
    <Marker
      key={data.id}
      position={[data.last_latitude, data.last_longitude]}
      icon={
        data.last_status === "Device Offline" ? iconUnavailable : iconAvailable
      }
    >
      <Popup>
        <div className="popup">
          <h2 className="popup_header">Device #{data.id}</h2>
          <ul className="popup_list">
            <li className="popup_list_item">Imei: {data.imei}</li>
            <li className="popup_list_item">Sim num: {data.sim_number}</li>
            <li className="popup_list_item">
              Last altitude: {data.last_altitude}
            </li>
            <li className="popup_list_item">Last Status: {data.last_status}</li>
            <li className="popup_list_item">Last speed: {data.last_speed}</li>
            <li className="popup_list_item">
              Last track time: {data.last_track_time}
            </li>
          </ul>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapItems;
