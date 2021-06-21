import React from "react";
import "./index.scss";

function User({ name, onClick, posts }) {
  return (
    <div className="user" onClick={onClick}>
      <p>{ name } </p> 
      <p className="user__count">{ posts }</p>
    </div>
  );
};

export default User;
