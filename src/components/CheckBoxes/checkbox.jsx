import React, { useEffect, useState } from "react";
import "./checkbox.css"; // Import your custom CSS for styling
import InputText from "../InputText/input";

function RadioButtonGroup({
  options,
  selectedOption,
  onChange,
  horizontal,
  title,
  updateInfo,
  radioInpDetails,
  otherValue,
  index,
  label,
}) {
  const [showInputText, setShowInputText] = useState(false); // State variable
  const [radioValue, setRadioValue] = useState("");
  const [radioBtnInfo, setradioBtnInfo] = useState({});

  const containerClassName = horizontal
    ? "radio-container horizontal"
    : "radio-container vertical";

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    onChange(index, selectedValue);
    // Check if the "Other" option is selected and toggle the input text accordingly
    setShowInputText(selectedValue === otherValue);
    setRadioValue(selectedValue);
  };

  const updateRadioDetails = (value, name) => {
    const temp = {};
    temp[label] = value;
    setradioBtnInfo(temp);
    updateInfo(temp[label], label);
  };

  const inputDetails = {
    ...radioInpDetails,
    updateInputValue: updateRadioDetails,
  };

  useEffect(() => {
    updateRadioDetails(radioValue);
  }, [radioValue]);

  // useEffect(() => {
  //   console.log(radioBtnInfo);
  // }, [radioBtnInfo]);

  return (
    <div>
      <div className="checkHeader">{title}</div>
      <div className={containerClassName}>
        {options.map((option) => (
          <label
            key={option}
            className={
              horizontal ? "radio-label-horizontal" : "radio-label-vertical"
            }
          >
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              name={label}
              required
            />
            <span className="radioText">{option}</span>
          </label>
        ))}

        {/* Conditional rendering of the input text */}
      </div>
      {showInputText && <InputText {...inputDetails} />}
    </div>
  );
}

export default RadioButtonGroup;
