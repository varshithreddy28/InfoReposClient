import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../CheckBoxes/checkbox";

export default function Management({ handleManagementContent }) {
  const [managementlnformation, setManagementInformation] = useState({});

  const updateManagementDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(managementlnformation));
    oldInfo[name] = value;
    setManagementInformation(oldInfo);
  };

  useEffect(() => {
    handleManagementContent(managementlnformation);
  }, [managementlnformation]);

  // Radio Buttons
  const options = ["Yes", "No"];

  const [selectedOption, setSelectedOption] = useState([{}, {}]);
  const [selectedOption1, setSelectedOption1] = useState([{}, {}]);

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

  const handleOptionChange2 = (index, value) => {
    //   updates the options which we are clicking
    const prevValues = [...selectedOption1];
    prevValues[index] = value;
    setSelectedOption1(prevValues);
  };

  const radioInputs = [
    {
      title: "Person in Charge",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "person_in_charge",
    },
    {
      title: "Counselor",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "counselor",
    },
    {
      title: "Child Welfare Officer/Probation Officer/Case Workers",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "child_welfare_officer",
    },
    {
      title: "House Mother/House Father",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "house_mother_father",
    },
    {
      title: "Medical Officer (Physician)",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "medical_officer",
    },
    {
      title: "Para Medical Staff",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "para_medical_staff",
    },
    {
      title: "Store Keeper cum Accountant",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "store_keeper_accountant",
    },
    {
      title: "(Part-time) Art and Craft cum Music Teacher",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "art_craft_music_teacher",
    },
    {
      title: "(Part-time) PT Instructor cum Yoga Trainer",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "pt_instructor_yoga_trainer",
    },
    {
      title: "Driver",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "driver",
    },
    {
      title: "Cook",
      options: ["Yes", "No"],
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "cook",
    },
    {
      title: "Helper",
      options: ["Yes", "No"],
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "helper",
    },
    {
      title: "House Keeping",
      options: ["Yes", "No"],
      selectedOption: selectedOption[12],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "house_keeping",
    },
    {
      title: "Security Guard",
      options: ["Yes", "No"],
      selectedOption: selectedOption[13],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "security_guard",
    },
    {
      title: "Any Other",
      options: ["Yes", "No"],
      selectedOption: selectedOption[14],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "any_other",
    },
    {
      title: "Female Superintendent/Manager/InCharge available for girls’ unit",
      options: ["Yes", "No"],
      selectedOption: selectedOption[15],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "female_superintendent",
    },
    // Continue with similar objects as needed
  ];

  const radioInputs1 = [
    {
      title: "Training organized for the staff on Child Rights Protection",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[0],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_child_rights_protection",
    },
    {
      title: "Training organized for the staff on Care Giving",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[1],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_care_giving",
    },
    {
      title: "Training organized for the staff on Rehabilitation",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[2],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_rehabilitation",
    },
    {
      title:
        "Training organized for the staff on Juvenile Justice (Care and Protection of Children) Act, 2015",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[3],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_juvenile_justice_act",
    },
    {
      title: "Training organized for the staff on Mission Vatsalya",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[4],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_mission_vatsalya",
    },
    {
      title: "Training and Orientation of care givers",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[5],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_orientation_care_givers",
    },
    {
      title: "Training and Orientation of children",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[6],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "training_orientation_children",
    },
    {
      title: "Rehabilitation-cum-Placement Officer",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[7],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "rehabilitation_placement_officer",
    },
    {
      title: "Superintendent/Manager/In-charge stay on the campus",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[8],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updateManagementDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "superintendent_manager_incharge",
    },
    // Continue with similar objects as needed
  ];

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">III. MANAGEMENT/ STAFFING PATTERN</div>
      </div>
      <div className="scndfrmsubheader">
        Rule 26: Management and Monitoring of Child Care Institutions
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

      <div className="scndfrmsubheader">
        Rule 89: Training of Personnel Dealing with Children
      </div>
      {radioInputs1.map((radio, index) => {
        return (
          <>
            {index === 5 ? (
              <div className="scndfrmsubheader">
                Rule 76: Abuse and Exploitation of the child
              </div>
            ) : index === 7 ? (
              <div className="scndfrmsubheader">
                Rule 65: Rehabilitation-cumPlacement Officer
              </div>
            ) : index === 8 ? (
              <div className="scndfrmsubheader">
                Rule 61: Duties of the Person-incharge of a Child Care
                Institution
              </div>
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
