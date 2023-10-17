import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./general.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

import { useForm, FormProvider } from "react-hook-form";

export default function General({ handleGeneralContent }) {
  const [generallnformation, setGeneralInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")
  const methods = useForm();

  const updateOrgDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(generallnformation));
    oldInfo[name] = value;
    setGeneralInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  const dateNames = [
    {
      name: "Date of Issue",
      updateDetails: updateOrgDetails,
    },
    {
      name: "Date of Expiry",
      updateDetails: updateOrgDetails,
    },
  ];

  useEffect(() => {
    handleGeneralContent(generallnformation);
  }, [generallnformation]);

  const inputNames = [
    {
      name: "organizationName",
      placeholder: "Enter the Name of Organization",
      label: "Name of Organizarion",
      updateInputValue: updateOrgDetails,
    },
    {
      name: "organizationAddress",
      placeholder: "Enter the Address of Organization",
      label: "Address of Organizarion",
      updateInputValue: updateOrgDetails,
    },
    {
      name: "registrationNo",
      placeholder: "Enter the Registration No. (Under JJ Act, 2015)",
      label: "Registration No. (Under JJ Act, 2015)",
      updateInputValue: updateOrgDetails,
    },
  ];
  const inputNames2 = [
    {
      name: "completeAddressCCI",
      placeholder: "Enter the Name Complete address of the CCI",
      label: "Complete address of the CCI",
      updateInputValue: updateOrgDetails,
    },
    {
      name: "personIncharge",
      placeholder: "Enter the Name of the Officer/Person-in-Charge",
      label: "Name of the Officer/Person-in-Charge",
      updateInputValue: updateOrgDetails,
    },
  ];
  const inputNames3 = [
    {
      name: "name_of_the_Department",
      placeholder: "Name of the Department",
      label: "If Aided/supported: by State Government, Name of the Department",
      updateInputValue: updateOrgDetails,
    },
  ];

  const inputNumber = [
    {
      name: "contactNo",
      placeholder: "Enter the Contact Number",
      label: "Contact Number",
      updateInputValue: updateOrgDetails,
    },
  ];

  const inputEmail = [
    {
      name: "emailId",
      placeholder: "Enter eMail Id",
      label: "Email Id",
      updateInputValue: updateOrgDetails,
    },
  ];

  // Radio Buttons
  const options = [
    "Observation Home",
    "Special Home",
    "Place of Safety",
    "Children’s Home",
    "Open Shelter",
    "Others",
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
      title: "Type of Home",
      horizontal: false,
      updateInfo: updateOrgDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "type_home",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div id="generalInfo">
      <div className="genHeader">General Information</div>
      <form onSubmit={handleLocalSubmit}>

        {inputNames.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}
        <div className="genDate">
          {dateNames.map((ele) => {
            return (
              <>
                <DatePickerComp {...ele} />
              </>
            );
          })}
        </div>

        {inputNames2.map((ele) => {
          return (
            <>
              <InputText {...ele} />
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

        {inputEmail.map((ele) => {
          return (
            <>
              <InputEmail {...ele} />
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

        {inputNames3.map((ele) => {
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
