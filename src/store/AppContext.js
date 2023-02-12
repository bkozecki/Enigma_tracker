import { createContext } from "react";

const AppContext = createContext({
  //created for better autocompletion
  deviceData: [],
  filterData: null,
  speedCheckState: null,
  setSpeedCheckState: () => {},
  setFilterData: () => {},
  filterHandler: () => {},
  devicesStateFiltered: () => {},
  devicesMoveFiltered: () => {},
  devicesSpeedFiltered: () => {},
});

export default AppContext;
