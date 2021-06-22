import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./index.scss";

function MenuItem({ path, text }) {
  return (
    <li className="menu-item">
      <Link to={path}>{ text }</Link>
    </li>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default MenuItem;
