import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../image/logo.png";

function Header() {
  return (
    <div className="Header">
      <Link to="/"><img src={logo} className="logo"/></Link>
      <Link to="/about" className="menu">ABOUT</Link>
      <Link to="/skil" className="menu">SKIL</Link>
      <Link to="/work" className="menu">WORK</Link>
      <Link to="/contact" className="menu">CONTACT</Link>
    </div>
  );
}

export default Header;
