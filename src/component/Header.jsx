import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import logo from "../image/logo.png";

function Header() {
  return (
    <div className="Header">
      <Link to="/" className="pc_only">
        <img src={logo} className="logo" />
      </Link>
      <Link to="/about" className="menu about_menu pc_only">
        ABOUT
      </Link>
      <Link to="/skil" className="menu skil_menu pc_only">
        SKIL
      </Link>
      <Link to="/work" className="menu work_menu pc_only">
        WORK
      </Link>
      <Link to="/contact" className="menu contact_menu pc_only">
        CONTACT
      </Link>

      <nav className="leftNav sp_only">
        <input id="menu" type="checkbox" />
        <label for="menu" className="open">
          ///
        </label>
        <label for="menu" className="back"></label>
        <ul className="sideMenu">
          <label for="menu">
            <li>
              <Link to="/" className="menu">
                TOP
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu about_menu">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/skil" className="menu skil_menu">
                SKIL
              </Link>
            </li>
            <li>
              <Link to="/work" className="menu work_menu">
                WORK
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu contact_menu">
                CONTACT
              </Link>
            </li>
          </label>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
