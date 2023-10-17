import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./Status.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";
import InputArea from "../InputArea/input";

export default function Status({ handleStatusContent }) {
  const [statusInformation, setStatusInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateStatusDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(statusInformation));
    oldInfo[name] = value;
    setStatusInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleStatusContent(statusInformation);
  }, [statusInformation]);

  const inputNames = [
    {
      name: "Sanction_capacity_Home",
      placeholder: "Enter the Sanction capacity of the Home",
      label: "Sanction capacity of the Home",
      updateInputValue: updateStatusDetails,
    },
  ];
  const inputNames2 = [
    {
      name: "seven_to_eleven_yrs",
      placeholder: "7-11 years",
      label: "7 to 11 years",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "twelve_to_eighteen",
      placeholder: "12 to18 years",
      label: "12 to 18 years",
      updateInputValue: updateStatusDetails,
    },
  ];
  const inputNames3 = [
    {
      name: "name_of_the_Department",
      placeholder: "Name of the Department",
      label: "If Aided/supported: by State Government, Name of the Department",
      updateInputValue: updateStatusDetails,
    },
  ];

  const inputNumber = [
    {
      name: "newAdmissions_cur_month",
      placeholder: "Enter the No. of new admissions in the current month",
      label: "No. of new admissions in the current month",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "children_released",
      placeholder: "Enter the No. of children who have moved out/released",
      label: "No. of children who have moved out/released",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "children_referred_CWC/JJB",
      placeholder:
        "Enter the No. of children referred by CWC/JJB during the month",
      label: "No. of children referred by CWC/JJB during the month",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "children_produced_CWC/JJB",
      placeholder:
        "Enter the No. of children produced before CWC/JJB during the month",
      label: "No. of children produced before CWC/JJB during the month",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "children_prev_mnth",
      placeholder:
        "Enter the No. of children as on last day of the previous month",
      label: "No. of children as on last day of the previous month",
      updateInputValue: updateStatusDetails,
    },
    {
      name: "children_spl_needs",
      placeholder: "if yes, give details",
      label: "No. of children with special needs, if yes, give details",
      updateInputValue: updateStatusDetails,
    },
  ];

  // Radio Buttons
  const [selectedOption, setSelectedOption] = useState([{}, {}]);
  const [selectedOption2, setSelectedOption2] = useState([{}, {}]);

  const radioInpDetails = {
    name: "number_children_today",
    placeholder: "Number of such Children as on Today",
    label: "If Yes, Number of such Children as on Today",
  };

  const radioInpDetails2 = {
    name: "children_special_needs",
    placeholder: "Enter Details Details",
    label: "No. of children with special needs, if yes, give details",
  };

  const handleOptionChange = (index, value) => {
    const prevValues = [...selectedOption];
    prevValues[index] = value;
    setSelectedOption(prevValues);
  };

  const handleOptionChange2 = (index, value) => {
    const prevValues = [...selectedOption2];
    prevValues[index] = value;
    setSelectedOption2(prevValues);
  };

  const radioInputs = [
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      title:
        "Are the children of both sexes below 10 years kept in the same home",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Yes",
      label: "number_of_children",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      title:
        "Are the bathing and sleeping facilities maintained separately for boys and girls in the age group of 5-10 years",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "bathing_sleeping",
    },
  ];

  const radioInputs2 = [
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption2[0],
      onChange: handleOptionChange2,
      title: "Are there children in the age group of 0-5 years staying there?",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Yes",
      label: "children_0_5",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption2[1],
      onChange: handleOptionChange2,
      title: "Are there children above 18 years staying there?",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Yes",
      label: "children_18_abv",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption2[2],
      onChange: handleOptionChange2,
      title: "Are the Individual care plans prepared for every child?",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "care_plans",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption2[3],
      onChange: handleOptionChange2,
      title: "Are there Children with Special Need's?",
      horizontal: true,
      updateInfo: updateStatusDetails,
      radioInpDetails: radioInpDetails2,
      otherValue: "Yes",
      label: "childre_special_needs",
    },
  ];

  const inputAreas = [
    {
      name: "children_Interventions",
      placeholder: "Enter the Interventions made for their rehabilitation",
      label: "Interventions",
      updateInputValue: updateStatusDetails,
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div>
      <div className="genHeader">B. Status of Children</div>
      <form onSubmit={handleLocalSubmit}>

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

        <div className="status_seg">
          <div className="header_stats">
            Are children segregated in the age group given below? Give number of
            children in the age group of
          </div>
          {inputNames2.map((ele) => {
            return (
              <>
                <InputText {...ele} />
              </>
            );
          })}
        </div>

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

        {inputNumber.map((ele) => {
          return (
            <>
              <InputNumber {...ele} />
            </>
          );
        })}

        {inputAreas.map((ele) => {
          return (
            <>
              <InputArea {...ele} />
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
