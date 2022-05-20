import React from "react";
import logo from "../img/logo-white.png";
import BtnHeader from "./btnHeader";

function header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <BtnHeader btnText="Discover Our Tours" btnType="white" />
      </div>
    </header>
  );
}

export default header;
