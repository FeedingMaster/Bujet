import React from "react";
import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Bujet by MrBanks" />
      <h1>Quick and easy budget overview.</h1>
    </div>
  );
}

export default Header;
