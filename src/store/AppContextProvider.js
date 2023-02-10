import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { API_URL } from "../utlis/utils";

const AppContextProvider = ({ children }) => {
  const [deviceData, setDeviceData] = useState([]);
  const [error, setError] = useState(false);
  const [filterChecked, setFilterChecked] = useState({
    state: false,
    move: false,
  });

  const devicesStateFiltered = () => {
    const filteredDevices = [];
    deviceData.map(
      (device) =>
        device.last_status === "Device Offline" && filteredDevices.push(device)
    );

    return filteredDevices;
  };

  const devicesMoveFiltered = () => {
    const filteredDevices = [];

    deviceData.map(
      (device) => device.last_speed > 0 && filteredDevices.push(device)
    );

    return filteredDevices;
  };

  const filterHandler = (ev) => {
    const { name, checked } = ev.target;
    setFilterChecked((prevState) => {
      return { ...prevState, [name]: checked };
    });
  };

  const contextValue = {
    deviceData,
    error,
    filterChecked,
    setFilterChecked,
    filterHandler,
    devicesStateFiltered,
    devicesMoveFiltered,
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
        setError(true);
      }
    };

    dataFetcher(API_URL);
  }, []);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
