import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./record.css";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

export default function RecordMaintenance({ handleRecordContent }) {
  const [recordMaintenanceInformation, setRecordMaintenanceInformation] =
    useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateRecordDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(recordMaintenanceInformation));
    oldInfo[name] = value;
    setRecordMaintenanceInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleRecordContent(recordMaintenanceInformation);
  }, [recordMaintenanceInformation]);

  const inputNames = [
    {
      name: "otherRecordMaintained",
      placeholder: "Enter Any other record maintained",
      label: "Any other record maintained",
      updateInputValue: updateRecordDetails,
    },
  ];

  // Radio Buttons
  const options = ["Yes", "No"];

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
      title: "Staff attendance register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "staff_attendance",
    },
    {
      options,
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      title: "Children attendance register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "children_attendance",
    },
    {
      options,
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      title: "Central admission register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "central_admission",
    },
    {
      options,
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      title: "Individual case file with individual care plan",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "individual_case_file",
    },
    {
      options,
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      title: "Communication with CWC/JJB",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "communication_cwc_jjb",
    },
    {
      options,
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      title: "Children’s suggestion book",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "children_suggestion_book",
    },
    {
      options,
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      title: "Children’s suggestion box",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "children_suggestion_box",
    },
    {
      options,
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      title: "Medical file / medical cards",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "medical_file",
    },
    {
      options,
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      title: "Personal belongings register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "personal_belongings_register",
    },
    {
      options,
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      title: "Management Committee – minutes register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "management_committee_minutes",
    },
    {
      options,
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      title: "Children’s Committee - minutes register",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "children_committee_minutes",
    },
    {
      options,
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      title: "Nutrition / Diet File",
      horizontal: true,
      updateInfo: updateRecordDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "nutrition_diet_file",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div>
      <div className="genHeader">G. Record Maintenance</div>

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
        <div className="formDataSub my-4">

          <button type="submit" >{saveBtn}</button>
        </div>

      </form>
    </div>
  );
}
