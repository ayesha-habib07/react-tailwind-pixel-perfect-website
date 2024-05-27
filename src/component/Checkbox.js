import React from "react";
import "../App.css";

const Checkbox = ({ defaultStyles = false, label, checked, onChange }) => {
  return (
    <div
      className={`flex items-center space-x-2 cursor-pointer ${
        !defaultStyles && "custom"
      }`}
    >
      <label htmlFor={label} className="checkbox custom-checkbox-label">
        <input
          type="checkbox"
          id={label}
          checked={checked}
          onChange={onChange}
          className="hidden-checkbox"
        />
        <span className="check custom-checkbox"></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
