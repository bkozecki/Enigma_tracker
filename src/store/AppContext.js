import { createContext } from "react";

const AppContext = createContext({
  //created for better autocompletion
  deviceData: [],
  filterData: null,
  deviceSpeed: 0,
  setDeviceSpeed: () => {},
  setFilterData: () => {},
  filterHandler: () => {},
  devicesStateFiltered: () => {},
  devicesMoveFiltered: () => {},
  devicesSpeedFiltered: () => {},
});

export default AppContext;
