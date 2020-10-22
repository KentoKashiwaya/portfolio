import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../image/logo.png";

function Header() {
  return (
    <div className="Header">
      <Link to="/"><img src={logo} className="logo"/></Link>
      <Link to="/about" className="menu about_menu">ABOUT</Link>
      <Link to="/skil" className="menu skil_menu">SKIL</Link>
      <Link to="/work" className="menu work_menu">WORK</Link>
      <Link to="/contact" className="menu contact_menu">CONTACT</Link>
    </div>
  );
}

export default Header;
