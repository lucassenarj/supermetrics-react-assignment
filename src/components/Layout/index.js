import React from "react";
import Header from "./../Header";
import PropTypes from "prop-types";
import "./index.scss";

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div>
        { children }
      </div>
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout;
