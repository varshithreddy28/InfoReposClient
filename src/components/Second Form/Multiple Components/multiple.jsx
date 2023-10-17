import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

export default function MultipleComponents({ handleMultipleContent }) {
  const [multiplelnformation, setMultipleInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateMultipleDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(multiplelnformation));
    oldInfo[name] = value;
    setMultipleInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleMultipleContent(multiplelnformation);
  }, [multiplelnformation]);

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
      title: "Standard operating procedure for child protection",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "child_protection_sop",
    },
    {
      title: "Suggestion Box",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "complaint_grievance_mechanism",
    },
    {
      title: "Child Helpline",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "child_helpline",
    },
    {
      title: "CCTV Cameras",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "cctv_cameras",
    },
    {
      title: "Children Committees",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "children_committees",
    },
    {
      title: "Regular Staff-Children Interface",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "staff_children_interface",
    },
    {
      title:
        "Daily routine is drawn up in consultation with the children’s committee and/or with children’s participation or as per the need",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "daily_routine_consultation",
    },
    {
      title:
        "Daily routine is on public display at prominent places in the institution",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "daily_routine_display",
    },
    {
      title: "Enough/safe toys are available and accessible to children",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "safe_toys_available",
    },
    {
      title:
        "Enough suitably equipped outdoor space for play is available and accessible to children",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateMultipleDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No",
      label: "outdoor_play_space",
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
        <div className="formName">V. PREVENTION AND PROTECTION FROM ABUSE</div>
      </div>
      <div className="scndfrmsubheader">
        Rule 76: Abuse and Exploitation of the child
      </div>
      <form onSubmit={handleLocalSubmit}>

        {radioInputs.map((radio, index) => {
          return (
            <>
              {index === 1 ? (
                <div className="checkHeader">
                  Functional and accessible complaint and grievance redressal
                  mechanism including for abuse prevention is in place, such as
                </div>
              ) : index === 6 ? (
                <>
                  <div className="formH">
                    <div className="formName">
                      VI. DAILY ROUTINE AND FACILITIES
                    </div>
                  </div>
                  <div className="scndfrmsubheader">Rule 32: Daily Routine</div>
                </>
              ) : index === 8 ? (
                <div className="scndfrmsubheader">
                  Rule 38: Recreational Facilities
                </div>
              ) : index === 10 ? (
                <>
                  <div className="formH">
                    <div className="formName">VII. NUTRITION AND RECREATION</div>
                  </div>
                  <div className="scndfrmsubheader">
                    Rule 33: Nutrition and Diet Scale
                  </div>
                </>
              ) : index === 11 ? (
                <div className="scndfrmsubheader">
                  Rule 38: Recreational Facilities
                </div>
              ) : index === 14 ? (
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
              ) : index === 16 ? (
                <div className="scndfrmsubheader">
                  Rule 31: Sanitation and Hygiene
                </div>
              ) : index === 19 ? (
                <div className="checkHeader">
                  Whether following facilities available in Home for children:
                </div>
              ) : index === 23 ? (
                <>
                  <div className="formH">
                    <div className="formName">IX. HEALTH CARE</div>
                  </div>
                  <div className="scndfrmsubheader">
                    Rule 34/35: Medical Care/ Mental Health
                  </div>
                </>
              ) : index === 25 ? (
                <>
                  <div className="formH">
                    <div className="formName">X. EDUCATION</div>
                  </div>
                  <div className="scndfrmsubheader">Rule 36/69: Education</div>
                </>
              ) : index === 26 ? (
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
