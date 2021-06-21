import React from "react";
import MenuItem from "./../MenuItem";
import "./index.scss";

function Menu() {
  return (
    <nav className="menu">
      <MenuItem path="/dashboard" text="Blog" />
      <MenuItem path="/about" text="About" />
      <MenuItem path="/contact" text="Contact" />
    </nav>
  );
};

export default Menu;
