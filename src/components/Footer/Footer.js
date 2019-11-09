import React from "react";
import logo from "../../image/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-text">
        <img className="ea" src={logo} alt="" style={{ width: 150 }} />
        <p style={{ fontSize: "1.3rem" }}>Code & Design By Kelvin Brito</p>
      </div>
    </div>
  );
};

export default Footer;
