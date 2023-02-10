import { createContext } from "react";

const AppContext = createContext({
  //created for better autocompletion
  deviceData: [],
  error: null,
  appStarted: null,
  appLauncher: () => {},
  filterChecked: null,
  setFilterChecked: () => {},
  filterHandler: () => {},
  devicesStateFiltered: () => {},
  devicesMoveFiltered: () => {},
});

export default AppContext;
