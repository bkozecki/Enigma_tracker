import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import { API_URL } from "../utlis/utils";

const AppContextProvider = ({ children }) => {
  const [deviceData, setDeviceData] = useState([]);
  const [dataCall, setDataCall] = useState(false);
  const [error, setError] = useState(false);

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

    dataCall && dataFetcher(API_URL);
  }, [dataCall]);

  console.log(deviceData);

  const contextValue = {
    deviceData,
    error,
    dataCall,
    setDataCall,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;
