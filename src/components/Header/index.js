import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";
import Menu from "./../Menu";
import "./index.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/dashboard">
        <img src={Logo} alt="Home" />
      </Link>

      <Menu />
    </header>
  );
};

export default Header;
