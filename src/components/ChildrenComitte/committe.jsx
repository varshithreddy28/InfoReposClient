import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./committe.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

export default function Committe({ handleCommitteContent }) {
  const [committelnformation, setCommitteInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateCommitteDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(committelnformation));
    oldInfo[name] = value;
    setCommitteInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    console.log(committelnformation);
    handleCommitteContent(committelnformation);
  }, [committelnformation]);

  const inputNames = [
    {
      name: "ageFormation",
      placeholder: "Enter Age wise formation of Children’s Committee",
      label: "Age wise formation of Children’s Committee",
      updateInputValue: updateCommitteDetails,
    },
    {
      name: "committeeMeetingFrequency",
      placeholder: "Enter Frequency of Children’s Committee Meeting",
      label: "Frequency of Children’s Committee Meeting",
      updateInputValue: updateCommitteDetails,
    },
    // You can add more items to the array as needed.
  ];

  const inputNames2 = [
    {
      name: "frequency_meetings",
      placeholder: "Enter the Frequency of meetings held",
      label: "Frequency of meetings held",
      updateInputValue: updateCommitteDetails,
    },
  ];

  // Radio Buttons
  const options = ["Yes", "No"];

  const [selectedOption, setSelectedOption] = useState([{}, {}]);
  const [selectedOption2, setSelectedOption2] = useState([{}, {}]);

  const radioInpDetails = {
    name: "Any Other",
    placeholder: "Any Other",
    label: "Any other (please specify)",
  };

  const handleOptionChange = (index, value) => {
    const prevValues = [...selectedOption];
    prevValues[index] = value;
    setSelectedOption(prevValues);
  };

  const radioInputs = [
    {
      options,
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      title: "Formation of Children’s Committee",
      horizontal: true,
      updateInfo: updateCommitteDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "formation_child_committe",
    },
  ];

  const handleOptionChange2 = (index, value) => {
    const prevValues = [...selectedOption2];
    prevValues[index] = value;
    setSelectedOption2(prevValues);
  };

  const radioInputs2 = [
    {
      options,
      selectedOption: selectedOption2[0],
      onChange: handleOptionChange2,
      title: "Formation of Management Committee",
      horizontal: true,
      updateInfo: updateCommitteDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "formation_management_committe",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChangeComp = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (selectedDate)
      updateCommitteDetails(
        selectedDate.toDateString(),
        "constitution_of_management_committee"
      );
  }, [selectedDate]);

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div>
      <div className="genHeader">
        F. Children’s Committee / Management Committee
      </div>
      <form onSubmit={handleLocalSubmit}>

        {radioInputs.map((radio, index) => {
          return (
            <>
              <RadioButtonGroup
                options={radio.options}
                selectedOption={radio.selectedOption}
                onChange={radio.onChange}
                title={radio.title}
                horizontal={radio.horizontal}
                updateInfo={radio.updateInfo}
                radioInpDetails={radio.radioInpDetails}
                otherValue={radio.otherValue}
                index={index}
                label={radio.label}
              />
            </>
          );
        })}

        {inputNames.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}

        {radioInputs2.map((radio, index) => {
          return (
            <>
              <RadioButtonGroup
                options={radio.options}
                selectedOption={radio.selectedOption}
                onChange={radio.onChange}
                title={radio.title}
                horizontal={radio.horizontal}
                updateInfo={radio.updateInfo}
                radioInpDetails={radio.radioInpDetails}
                otherValue={radio.otherValue}
                index={index}
                label={radio.label}
              />
            </>
          );
        })}

        <div className="staffInpDetails">
          <label htmlFor="constitutionMang" className="nameFormHeader">
            Date of constitution of Management Committee
          </label>
          <div className="nameformEle">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChangeComp}
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>

        {inputNames2.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}
        <div className="formDataSub my-4">
          <button type="submit" >{saveBtn}</button>
        </div>
      </form>
    </div>
  );
}
