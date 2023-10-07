import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../CheckBoxes/checkbox";

export default function Functionality({ handleFunctionalityContent }) {
  const [functionalitytlnformation, setFunctionalityInformation] = useState({});

  const updateFunctionalityDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(functionalitytlnformation));
    oldInfo[name] = value;
    setFunctionalityInformation(oldInfo);
  };

  useEffect(() => {
    handleFunctionalityContent(functionalitytlnformation);
  }, [functionalitytlnformation]);

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
      title: "Computer with internet accessibility",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "computer_internet_accessibility",
    },
    {
      title: "Records stored safely",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "records_stored_safely",
    },
    {
      title: "Essential Details including- Emergency Numbers",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "essential_details_emergency_numbers",
    },
    {
      title: "Duty Chart",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "duty_chart",
    },
    {
      title: "Menu Chart",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "menu_chart",
    },
    {
      title: "Attendance Status",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "attendance_status",
    },
    {
      title: "Weekly Programme Schedule",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "weekly_programme_schedule",
    },
    {
      title:
        "Safe transport facility for children attaining education outside the campus",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "safe_transport_facility_education",
    },
    {
      title: "Separate facilities for children from staff and management",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "separate_facilities_children_staff",
    },
    {
      title:
        "Facilities and support (equipment, staff, teaching and learning materials/aids) for children with special needs",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "facilities_support_special_needs",
    },
    {
      title: "visual needs",
      options: ["Yes", "No"],
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "visual_needs",
    },
    {
      title: "Intellectual needs",
      options: ["Yes", "No"],
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "intellectual_needs",
    },
    {
      title: "hearing needs",
      options: ["Yes", "No"],
      selectedOption: selectedOption[12],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "hearing_needs",
    },
    {
      title: "others",
      options: ["Yes", "No"],
      selectedOption: selectedOption[13],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "others",
    },
    {
      title:
        "Rooms and dormitories is free of unstable heavy equipment, furniture, or other items that children could pull down on themselves",
      options: ["Yes", "No"],
      selectedOption: selectedOption[14],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "rooms_dormitories_free_unstable",
    },
    {
      title: "Privacy maintained in toilets and bathing areas",
      options: ["Yes", "No"],
      selectedOption: selectedOption[15],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "privacy_maintained_toilets",
    },
    {
      title: "Basic emergency medical care equipment available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[16],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "emergency_medical_care_equipment",
    },
    {
      title: "Special emergency medical care equipment available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[17],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateFunctionalityDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "special_emergency_medical_care_equipment",
    },
    // Continue with similar objects as needed
  ];

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">IV. FUNCTIONALITY</div>
      </div>
      <div className="scndfrmsubheader">Rule 29: Physical Infrastructure</div>

      {radioInputs.map((radio, index) => {
        return (
          <>
            {index === 15 ? (
              <div className="scndfrmsubheader">Rule 67: Security Measures</div>
            ) : (
              ""
            )}
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
