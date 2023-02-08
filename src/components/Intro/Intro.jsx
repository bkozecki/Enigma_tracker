import { useContext } from "react";
import AppContext from "../../store/AppContext";

import "./Intro.style.scss";

const Intro = () => {
  const ctx = useContext(AppContext);

  const dataCallerHandler = () => {
    ctx.setDataCall(true);
  };
  return (
    <div className="intro">
      <button className="intro_btn" onClick={dataCallerHandler}>
        Start tracking
      </button>
    </div>
  );
};

export default Intro;
