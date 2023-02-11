import React, { useState, useContext, useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import AppContext from "../../../store/AppContext";
import MapItems from "../MapItems/MapItems";
import "./MapContent.style.scss";

const MapContent = () => {
  const [defaultCenter, setDefaultCenter] = useState([12.36703, 12.38062]);
  const ctx = useContext(AppContext);

  const mapViewRef = useRef();

  const mapTest = () => {
    const { current = {} } = mapViewRef;
    const { leafletElement: map } = current;
    map.setView(defaultCenter, 13);
  };

  //if both filters checked, show all devices
  const devicePosition = ctx.deviceData.map((data) => (
    <MapItems mapTest={mapTest} key={data.id} data={data} />
  ));

  //if filters checked, show specific devices
  const filteredState = ctx.devicesStateFiltered();
  const filteredStateDevices = filteredState.map((data) => (
    <MapItems key={data.id} data={data} />
  ));
  const filteredMove = ctx.devicesMoveFiltered();
  const filteredMoveDevices = filteredMove.map((data) => (
    <MapItems key={data.id} data={data} />
  ));

  const { state, move } = ctx.filterChecked;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={6}
      scrollWheelZoom={true}
      ref={mapViewRef}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {!state && !move && devicePosition}
      {state && !move && filteredStateDevices}
      {!state && move && filteredMoveDevices}
    </MapContainer>
  );
};

export default MapContent;
