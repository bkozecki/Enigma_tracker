import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { API_URL } from "../utlis/utils";

const AppContextProvider = ({ children }) => {
  const [deviceData, setDeviceData] = useState([]);
  const [deviceSpeed, setDeviceSpeed] = useState("");
  const [filterData, setFilterData] = useState({
    state: true,
    move: true,
  });

  const devicesStateFiltered = () => {
    const filteredDevices = deviceData.filter(
      (device) => device.last_status === "Device Offline"
    );

    return filteredDevices;
  };

  const devicesMoveFiltered = () => {
    const filteredDevices = deviceData.filter(
      (device) => device.last_speed > 0
    );

    return filteredDevices;
  };

  const devicesSpeedFiltered = () => {
    let updatedDevices = [...deviceData];
    updatedDevices = deviceData.filter(
      (device) => +device.last_speed >= +deviceSpeed
    );

    return updatedDevices;
  };

  const filterHandler = (ev) => {
    const { name, checked } = ev.target;
    setFilterData((prevState) => {
      return { ...prevState, [name]: checked };
    });
  };

  const contextValue = {
    deviceData,
    filterData,
    setFilterData,
    filterHandler,
    setDeviceSpeed,
    devicesStateFiltered,
    devicesMoveFiltered,
    devicesSpeedFiltered,
  };

  useEffect(() => {
    const dataFetcher = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();

        //store to be displayed data
        setDeviceData(data.data);
      } catch (error) {
        console.error(error);
        alert(error);
      }
    };

    dataFetcher(API_URL);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
