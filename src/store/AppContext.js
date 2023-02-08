import { createContext } from "react";

const AppContext = createContext({
  //created for better autocompletion
  devideData: [],
  error: false,
  dataCall: false,
  setDataCall: () => {},
});

export default AppContext;
