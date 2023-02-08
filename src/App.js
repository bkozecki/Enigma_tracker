import "./App.css";
import { useContext } from "react";
import AppContext from "./store/AppContext";
import Map from "./components/Map/Map";
import Intro from "./components/Intro/Intro";

function App() {
  const ctx = useContext(AppContext);

  return (
    <div className="App">
      {!ctx.dataCall && <Intro />}
      {ctx.dataCall && <Map />}
    </div>
  );
}

export default App;
