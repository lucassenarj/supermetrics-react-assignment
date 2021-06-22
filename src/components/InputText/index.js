import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function InputText({
  label,
  icon,
  name,
  onChange,
  placeholder,
  type,
  value
}) {
  return (
    <div className="input-text">
      {
        label ? (<label name={type} className="input-text__label">{ label }</label>) : ""
      }
      <div className="input-text__formControl">
        <span> { icon }</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="input-text__formControl__input"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

InputText.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
}

export default InputText;
