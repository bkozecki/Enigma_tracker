import { createContext } from "react";

const AppContext = createContext({
  //created for better autocompletion
  deviceData: [],
  appLauncher: () => {},
  filterChecked: null,
  setFilterChecked: () => {},
  filterHandler: () => {},
  devicesStateFiltered: () => {},
  devicesMoveFiltered: () => {},
});

export default AppContext;
