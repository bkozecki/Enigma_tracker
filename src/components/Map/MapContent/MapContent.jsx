import React, { useState, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AppContext from "../../../store/AppContext";
import MapItems from "../MapItems/MapItems";
import "./MapContent.style.scss";

const MapContent = () => {
  const [defaultCenter, setDefaultCenter] = useState([12.36703, 12.38062]);
  const ctx = useContext(AppContext);

  const { state, move } = ctx.filterData;
  const speedCheck = ctx.speedCheckState;

  const filteredState = ctx.devicesStateFiltered();
  const filteredMove = ctx.devicesMoveFiltered();
  const filterSpeed = ctx.devicesSpeedFiltered(ctx.deviceData);
  const filteredSpeedState = ctx.devicesSpeedFiltered(filteredState);
  const filteredSpeedMove = ctx.devicesSpeedFiltered(filteredMove);

  //if both filters checked, show all devices or show devices based on speed
  const devicePosition = (!speedCheck ? ctx.deviceData : filterSpeed).map(
    (data) => <MapItems key={data.id} data={data} />
  );

  //if filters checked, show specific devices
  // Device offline filter
  const filteredStateDevices = (
    !speedCheck ? filteredState : filteredSpeedState
  ).map((data) => <MapItems key={data.id} data={data} />);

  //Device Moving filter/ moving with speed
  const filteredMoveDevices = (
    !speedCheck ? filteredMove : filteredSpeedMove
  ).map((data) => <MapItems key={data.id} data={data} />);

  return (
    <MapContainer center={defaultCenter} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {state && move && devicePosition}
      {!move && filteredStateDevices}
      {!state && filteredMoveDevices}
    </MapContainer>
  );
};

export default MapContent;
