import React from "react";
import "../App.css"; // Import the CSS file

const Checkbox = ({ label, checked, onChange }) => {
    return (
        <div className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            id={label}
            checked={checked}
            onChange={onChange}
            className="hidden-checkbox"
          />
          <label htmlFor={label} className="custom-checkbox-label">
            <span className="custom-checkbox"></span>
            {label}
          </label>
        </div>
    );
};

export default Checkbox;
