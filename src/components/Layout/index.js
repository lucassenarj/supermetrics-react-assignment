import React from "react";
import Header from "./../Header";
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

export default Layout;
