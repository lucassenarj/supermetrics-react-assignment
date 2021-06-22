import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function User({ id, name, onClick, posts }) {
  return (
    <button className="user" onClick={onClick} data-testid={id}>
      <p>{ name } </p> 
      <p className="user__count">{ posts }</p>
    </button>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  posts: PropTypes.number.isRequired,
};

export default User;
