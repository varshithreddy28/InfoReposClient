import React, { useState, useEffect } from "react";

export default function InputText({
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
            className="form-control"
            id={name}
            type="text"
            placeholder={placeholder}
            name={label}
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
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
