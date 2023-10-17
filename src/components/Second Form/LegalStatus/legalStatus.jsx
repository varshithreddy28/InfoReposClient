import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./legal.css";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn File Upload/checkbox";

export default function LegalStatus({ handleLegalContent }) {
  const [legallnformation, setLegalInformation] = useState({});
  const [fileUrl, setFileUrl] = useState([]);

  const updateLegalDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(legallnformation));
    oldInfo[name] = value;
    setLegalInformation(oldInfo);

  };

  useEffect(() => {
    handleLegalContent(legallnformation);
  }, [legallnformation]);

  // Radio Buttons
  const options = ["Yes", "No"];

  const [selectedOption, setSelectedOption] = useState([{}, {}]);

  const radioInpDetails = {
    name: "remarks_incase",
    placeholder:
      "Enter Remarks (In case of No Compliance or Partial Compliance)",
    label: "Remarks (In case of No Compliance or Partial Compliance)",
  };

  const handleOptionChange = (index, value) => {
    //   updates the options which we are clicking
    const prevValues = [...selectedOption];
    prevValues[index] = value;
    setSelectedOption(prevValues);
  };

  const radioInputs = [
    {
      title:
        "Registration of the Parent Organization under the Societies Registration Act 1860/The Indian Trusts Act 1882/The Companies Act 2013",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateLegalDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "parent_organization_registration",
    },
    {
      title:
        "Registration No. of the Parent Organization under the Societies Registration Act 1860/The Indian Trusts Act 1882/The Companies Act 2013",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateLegalDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "parent_organization_registration_no",
    },
    {
      title:
        "Foreign Contribution (Regulation) Act 2010, Registration (if any)",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateLegalDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "foreign_contribution_registration",
    },
  ];

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">I. LEGAL STATUS</div>
      </div>
      <div className="scndfrmsubheader">
        Registration of the Child Care Institutions
      </div>

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
    </div>
  );
}
