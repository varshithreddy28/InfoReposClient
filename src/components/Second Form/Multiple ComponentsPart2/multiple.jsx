import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

export default function MultipleComponentsP2({ handleMultipleContent }) {
  const [multiplelnformation2, setMultipleInformation2] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateMultipleDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(multiplelnformation2));
    oldInfo[name] = value;
    setMultipleInformation2(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleMultipleContent(multiplelnformation2);
  }, [multiplelnformation2]);

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
        "Staff is aware of the nutritional requirement of children at varying stages of development",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "nutritional_requirement_awareness",
    },
    {
      title: "Indoor recreation facilities are available for children",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "indoor_recreation_facilities",
    },
    {
      title: "Outdoor recreation facilities are available for children",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "outdoor_recreation_facilities",
    },
    {
      title:
        "Any innovative activities to develop cooperation/ participation, resilience, etc. are harnessed",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "innovative_activities_harnessed",
    },
    {
      title:
        "Clean, seasonal and age-appropriate clothes, articles, and toiletries as per norms are available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "clean_clothes_toiletries_available",
    },
    {
      title:
        "Clean, seasonally appropriate mats and sleeping materials as per norms are available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "clean_mats_sleeping_materials",
    },
    {
      title:
        "Sleeping material is cleaned /sanitized regularly or before reuse as needed",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "sleeping_material_cleaned",
    },
    {
      title:
        "Rooms are regularly fumigated, disinfected and material provided to each child for prevention of infection and disease",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "rooms_fumigated_disinfected",
    },
    {
      title:
        "Secured space to store personal belongings is available for each child",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "secured_space_personal_belongings",
    },
    {
      title: "Fans",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "fans_available",
    },
    {
      title: "Coolers",
      options: ["Yes", "No"],
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "coolers_available",
    },
    {
      title: "Air Conditioner",
      options: ["Yes", "No"],
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "air_conditioner_available",
    },
    {
      title: "Heaters for Winter",
      options: ["Yes", "No"],
      selectedOption: selectedOption[12],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "heaters_for_winter_available",
    },
    {
      title: "Nurse/paramedical staff is available in the Home at night",
      options: ["Yes", "No"],
      selectedOption: selectedOption[13],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "nurse_paramedical_staff_available",
    },
    {
      title: "Staff is trained to provide First Aid",
      options: ["Yes", "No"],
      selectedOption: selectedOption[14],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "staff_trained_first_aid",
    },
    {
      title: "To provide age-appropriate education option is available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[15],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "age_appropriate_education_option_available",
    },
    {
      title:
        "Option for age-appropriate, feasible, and market-oriented education is available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[16],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "market_oriented_education_option_available",
    }
    // Continue with similar objects as needed
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">VII. NUTRITION AND RECREATION</div>
      </div>
      <div className="scndfrmsubheader">
        Rule 33: Nutrition and Diet Scale
      </div>
      <form onSubmit={handleLocalSubmit}>

        {radioInputs.map((radio, index) => {
          return (
            <>
              {index === 1 ? (
                <div className="scndfrmsubheader">
                  Rule 38: Recreational Facilities
                </div>
              ) : index === 4 ? (
                <>
                  <div className="formH">
                    <div className="formName">
                      VIII. CLOTHING, BEDDING HYGIENE
                    </div>
                  </div>
                  <div className="scndfrmsubheader">
                    Rule 30: Clothing, Bedding, Toiletries and other articles
                  </div>
                </>
              ) : index === 6 ? (
                <div className="scndfrmsubheader">
                  Rule 31: Sanitation and Hygiene
                </div>
              ) : index === 9 ? (
                <div className="checkHeader">
                  Whether following facilities available in Home for children:
                </div>
              ) : index === 13 ? (
                <>
                  <div className="formH">
                    <div className="formName">IX. HEALTH CARE</div>
                  </div>
                  <div className="scndfrmsubheader">
                    Rule 34/35: Medical Care/ Mental Health
                  </div>
                </>
              ) : index === 15 ? (
                <>
                  <div className="formH">
                    <div className="formName">X. EDUCATION</div>
                  </div>
                  <div className="scndfrmsubheader">Rule 36/69: Education</div>
                </>
              ) : index === 16 ? (
                <div className="scndfrmsubheader">
                  Rule 37: Vocational Training
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
        <div className="formDataSub my-4">

          <button type="submit" >{saveBtn}</button>
        </div>

      </form>
    </div>
  );
}
