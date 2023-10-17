import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

import { useForm, FormProvider } from "react-hook-form";

export default function PhysicalInfra({ handlePhysicalInfraContent }) {
  const [PhysicalInfralnformation, setPhysicalInfraInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updatePhysicalInfraDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(PhysicalInfralnformation));
    oldInfo[name] = value;
    setPhysicalInfraInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handlePhysicalInfraContent(PhysicalInfralnformation);
  }, [PhysicalInfralnformation]);

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
      title:
        "Sign board displayed indicating name, type of CCI, contact details",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "sign_board_displayed",
    },
    {
      title: "Boundary wall/fencing",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "boundary_wall_fencing",
    },
    {
      title: "Classroom",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "classroom",
    },
    {
      title: "Dormitories",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "dormitories",
    },
    {
      title: "Kitchen",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "kitchen",
    },
    {
      title: "Counseling",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "counseling",
    },
    {
      title: "Recreation",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "recreation",
    },
    {
      title: "Sick room",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "sick_room",
    },
    {
      title: "Library",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "library",
    },
    {
      title: "Visitors’ room",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "visitors_room",
    },
    {
      title: "Vocational training",
      options: ["Yes", "No"],
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "vocational_training",
    },
    {
      title: "Dining hall",
      options: ["Yes", "No"],
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "dining_hall",
    },
    {
      title: "Store",
      options: ["Yes", "No"],
      selectedOption: selectedOption[12],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "store",
    },
    {
      title: "Record room",
      options: ["Yes", "No"],
      selectedOption: selectedOption[13],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "record_room",
    },
    {
      title: "Office room",
      options: ["Yes", "No"],
      selectedOption: selectedOption[14],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "office_room",
    },
    {
      title: "Staff Residence",
      options: ["Yes", "No"],
      selectedOption: selectedOption[15],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "staff_residence",
    },
    {
      title: "Bathrooms",
      options: ["Yes", "No"],
      selectedOption: selectedOption[16],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "bathrooms",
    },
    {
      title: "Toilets",
      options: ["Yes", "No"],
      selectedOption: selectedOption[17],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "toilets",
    },
    {
      title:
        "Good condition of ceilings walls, floor coverings, draperies, curtains, blinds, furniture, fixtures, and equipment",
      options: ["Yes", "No"],
      selectedOption: selectedOption[18],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "good_condition",
    },
  ];

  const radioInputs2 = [
    {
      title:
        "Child friendly bathrooms / bathing areas (1:10) available exclusively for children",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[0],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "child_friendly_bathrooms",
    },
    {
      title: "Child friendly toilets exclusively for children (1:7) available",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[1],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "child_friendly_toilets",
    },
    {
      title: "Safe and purified drinking water storage is available",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[2],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "drinking_water_storage",
    },
    {
      title: "Safe and purified drinking water is provided to all children",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[3],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "drinking_water_provided",
    },
    {
      title: "Proper drainage and facilities available for garbage disposal",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[4],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "garbage_disposal_facilities",
    },
    {
      title:
        "Clear guidelines regarding access of staff/visitors in identified areas especially in children’s dormitories/toilets",
      options: ["Yes", "No"],
      selectedOption: selectedOption1[5],
      onChange: handleOptionChange2,
      horizontal: true,
      updateInfo: updatePhysicalInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "access_guidelines",
    },
    // Continue with similar objects as needed
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">II. PHYSICAL INFRASTRUCTURE</div>
      </div>
      <div className="scndfrmsubheader">Rule 29: Physical Infrastructure</div>
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

        <div className="scndfrmsubheader">Rule 31: Sanitation and Hygiene</div>
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
        <div className="formDataSub my-4">

          <button type="submit" >{saveBtn}</button>
        </div>

      </form>
    </div>
  );
}
