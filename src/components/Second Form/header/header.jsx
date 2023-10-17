import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./header.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../CheckBoxes/checkbox";

import { useForm, FormProvider } from "react-hook-form";
import StateDistrictSelector from "../StateDistrict/stateDis";

export default function Header({ handleHeaderContent }) {
  const [headerlnformation, setHeaderInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateHeaderDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(headerlnformation));
    oldInfo[name] = value;
    setHeaderInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleHeaderContent(headerlnformation);
  }, [headerlnformation]);

  const inputNames = [
    {
      name: "name_of_institution",
      placeholder: "Enter the Name of Institution",
      label: "Name of Institution",
      updateInputValue: updateHeaderDetails,
    },
    {
      name: "education_facility",
      placeholder: "Enter the Educational facility",
      label: "Educational facility",
      updateInputValue: updateHeaderDetails,
    },
  ];
  const inputNames2 = [
    {
      name: "name_of_institution",
      placeholder: "Enter the Name of Institution",
      label: "Name of the Institution",
      updateInputValue: updateHeaderDetails,
    },
    {
      name: "address_of_institution",
      placeholder: "Enter the Address of Institution",
      label: "Address of the Institution",
      updateInputValue: updateHeaderDetails,
    },
  ];

  // Radio Buttons
  const options = [
    "Children Home",
    "Observation Home",
    "Special Home",
    "Place of Safety",
    "Open Shelter",
    "Specialised Adoption Agency",
    "Fit Facility",
  ];

  const [selectedOption, setSelectedOption] = useState([{}, {}]);

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
      title: "Type of Facility",
      horizontal: false,
      updateInfo: updateHeaderDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "type_facility",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }


  return (
    <div id="generalInfo">
      {/* <div className="formH">
        <div className="formName">FORM 46A</div>
        <div className="rule">[Rule 21(3) and Rule 21(15)]</div>
        <div className="inspectionBy">
          INSPECTION FORMAT FOR REGISTERATION AND RENEWAL OF A CHILD CARE
          INSTITUTION
        </div>
      </div> */}
      <form onSubmit={handleLocalSubmit}>

        <StateDistrictSelector updateHeaderDetails={updateHeaderDetails} />
        {inputNames.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}

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
