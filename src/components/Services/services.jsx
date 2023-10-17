import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./service.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";
import InputArea from "../InputArea/input";

export default function Service({ handleServiceContent }) {
  const [serviceInfo, setServiceContent] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateServiceDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(serviceInfo));
    oldInfo[name] = value;
    setServiceContent(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleServiceContent(serviceInfo);
  }, [serviceInfo]);

  const inputNames = [
    {
      name: "medicalFacilitiesHealth",
      placeholder: "Enter the Medical facilities/ Maintenance of Health Cards",
      label: "Medical facilities/ Maintenance of Health Cards",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "nutritionSplDiet",
      placeholder: "Nutrition / Special Diet",
      label: "Nutrition / Special Diet",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "provOfDrinkingWater",
      placeholder: "Enter the Provision of safe drinking water",
      label: "Provision of safe drinking water",
      updateInputValue: updateServiceDetails,
    },
  ];
  const inputNames2 = [
    {
      name: "morningActivities",
      placeholder: "Morning Activities / Schedule",
      label: "Morning",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "dayTimeActivities",
      placeholder: "Day Time Activities / Schedule",
      label: "Day Time",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "afternoonActivities",
      placeholder: "Afternoon Activities / Schedule",
      label: "Afternoon",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "eveningActivities",
      placeholder: "Evening Activities / Schedule",
      label: "Evening",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "eveningActivities",
      placeholder: "Late evening Activities / Schedule",
      label: "Late evening / Night",
      updateInputValue: updateServiceDetails,
    },
  ];
  const inputNames3 = [
    {
      name: "counseling_services",
      placeholder: "Enter Counseling/ Guidance services",
      label: "Counseling/ Guidance services provided",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "vocational_training",
      placeholder: "Enter Vocational training",
      label: "Vocational training provided",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "recreational_facilities",
      placeholder: "Enter Recreational facilities",
      label: "Recreational facilities provided",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "linkages_with_agencies",
      placeholder: "Enter Linkages developed with other agencies/ departments",
      label: "Linkages developed with other agencies/ departments",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "missing_child_programme_entries",
      placeholder:
        "Enter Entries of children in track the missing child website",
      label: "Implementation of track the missing child programme (Entries)",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "missing_child_programme_user",
      placeholder: "Enter User Id and password provided",
      label:
        "Implementation of track the missing child programme (User Id and password)",
      updateInputValue: updateServiceDetails,
    },
    {
      name: "other_programs_and_activities",
      placeholder: "Enter Other programmes and activities initiated",
      label: "Other programmes and activities initiated",
      updateInputValue: updateServiceDetails,
    },
  ];

  // Now you have the modified array with the provided text and labels.

  const inputNumber = [
    {
      name: "contactNo",
      placeholder: "Enter the Contact Number",
      label: "Contact Number",
      updateInputValue: updateServiceDetails,
    },
  ];

  const inputEmail = [
    {
      name: "emailId",
      placeholder: "Enter eMail Id",
      label: "Email Id",
      updateInputValue: updateServiceDetails,
    },
  ];

  // Radio Buttons
  const options = ["Yes", "No"];

  const [selectedServiceOption, setSelectedServiceOption] = useState([{}, {}]);

  const radioInpDetails = {
    name: "Any Other",
    placeholder: "Any Other",
    label: "Any other (please specify)",
  };

  const handleOptionChangeService = (index, value) => {
    const prevValues = [...selectedServiceOption];
    prevValues[index] = value;
    setSelectedServiceOption(prevValues);
  };

  const radioInputs = [
    {
      title: "Is the facility of Computer with internet available?",
      options,
      selectedOption: selectedServiceOption[0],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "computer_with_internet",
    },
    {
      title: "Is the facility functional?",
      options: ["Yes", "No"],
      selectedOption: selectedServiceOption[1],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "facility_functional",
    },
    {
      title: "Are the children allowed to use the facility?",
      options: ["Yes", "No"],
      selectedOption: selectedServiceOption[2],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "children_use_facility",
    },
    {
      title: "Is the telephone for official purposes only?",
      options: ["Yes", "No"],
      selectedOption: selectedServiceOption[3],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "official_purpose_telephone",
    },
    {
      title:
        "Are the children allowed to use telephone fixed timing/ as and when required?",
      options: ["Fixed Timing", "When Required"],
      selectedOption: selectedServiceOption[4],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "children_use_telephone",
    },
    {
      title: "Is the number of Childline (1098) displayed near the phone?",
      options: ["Yes", "No"],
      selectedOption: selectedServiceOption[5],
      onChange: handleOptionChangeService,
      horizontal: true,
      updateInfo: updateServiceDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "childline_displayed_near_phone",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div>
      <div className="genHeader">D. Services provided to the children</div>
      <form onSubmit={handleLocalSubmit}>

        {inputNames.map((ele) => {
          return (
            <>
              <InputArea {...ele} />
            </>
          );
        })}

        <div className="genHeader">Daily Routine of Children</div>
        {inputNames2.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}

        <div className="genHeader">Computer/ Internet/ Phone</div>
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
