import React, { useState, useEffect } from "react";
import "./input.css";

export default function InputNumber({
  name,
  label,
  placeholder,
  updateInputValue,
}) {
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    updateInputValue(inputValue, name);
  }, [inputValue]);

  return (
    <div>
      <div className="inputComp">
        <label htmlFor={label} className="nameFormHeader">
          {label}
        </label>
        <div className="inpCompTxt">
          <input
            className="form-control number"
            id={name}
            type="number"
            placeholder={placeholder}
            name={label}
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            min={0}
            required
          />
          {/* <button className="nameAdd" onClick={handleAdd}>
            Add
          </button> */}
        </div>
      </div>
    </div>
  );
}
