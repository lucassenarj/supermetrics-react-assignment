import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function MenuItem({ path, text }) {
  return (
    <li className="menu-item">
      <Link to={path}>{ text }</Link>
    </li>
  );
};

export default MenuItem;
