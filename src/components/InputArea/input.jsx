import React, { useState, useEffect } from "react";

export default function InputArea({
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
          <textarea
            className="form-control"
            id={name}
            type="text"
            placeholder={placeholder}
            name={label}
            value={inputValue}
            rows={3}
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
