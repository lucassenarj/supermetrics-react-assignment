import React from "react";
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

export default InputText;
