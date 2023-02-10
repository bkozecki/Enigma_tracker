import { useContext } from "react";
import AppContext from "../../store/AppContext";
import { createPortal } from "react-dom";

import "./Intro.style.scss";

const portalEl = document.getElementById("overlays");

const Backdrop = () => {
  const ctx = useContext(AppContext);
  return <div className={`backdrop ${ctx.appStarted && "inactive"}`} />;
};

const IntroEl = () => {
  const ctx = useContext(AppContext);

  return (
    <div className={`intro ${ctx.appStarted && "inactive"}`}>
      <button className="intro_btn">Launch App</button>
    </div>
  );
};

const Intro = () => {
  return (
    <>
      {createPortal(<Backdrop />, portalEl)}
      {createPortal(<IntroEl />, portalEl)}
    </>
  );
};

export default Intro;
