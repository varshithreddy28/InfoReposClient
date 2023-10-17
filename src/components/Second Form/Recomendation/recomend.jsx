import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./recomend.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

import { useForm, FormProvider } from "react-hook-form";
import DistrictInfoForm from "../FillinBlank/DistrictInfoForm";

export default function Recomend({ handleRecomendContent }) {
  const [Recomendlnformation, setRecomendInformation] = useState({});
  const [saveBtn, setsaveBtn] = useState("Save Data")


  const updateRecommendDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(Recomendlnformation));
    oldInfo[name] = value;
    setRecomendInformation(oldInfo);
    setsaveBtn("Save Data")

  };

  useEffect(() => {
    handleRecomendContent(Recomendlnformation);
  }, [Recomendlnformation]);

  const dateNames = [
    {
      name: "Date",
      updateDetails: updateRecommendDetails,
    },
  ];

  const inputNames2 = [
    {
      name: "name_of_magistrate",
      placeholder: "Enter the Magistrate Name",
      label: "Name of the Magistrate",
      updateInputValue: updateRecommendDetails,
    },
    {
      name: "name_of_district",
      placeholder: "Enter the District Name",
      label: "Name of the District",
      updateInputValue: updateRecommendDetails,
    },
    {
      name: "name_of_state",
      placeholder: "Enter the State Name",
      label: "Name of the State",
      updateInputValue: updateRecommendDetails,
    },
  ];

  // Radio Buttons
  const options = [
    "In view of the above, the said Child Care Institution is recommended for consideration for registration/renewal of registration.",
    "In view of the above, the said Child Care Institution is not recommended for consideration for registration/renewal of registration. (whichever is applicable)",
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
      title: "3. Registration Recommendation",
      horizontal: false,
      updateInfo: updateRecommendDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "registration_recommendation",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
    setsaveBtn("Data Saved")
  }

  return (
    <div id="generalInfo disrtict">
      <div className="formH">
        <div className="inspectionBy ">
          I. RECOMMENDATION BY DISTRICT MAGISTRATE FOR REGISTRATION -
        </div>
      </div>
      <form onSubmit={handleLocalSubmit}>
        <div className="districtInfoDetails">
          <div className="dictrictForm checkHeader">
            1. Details of violations or discrepancies or not as per norms
            observed:–
          </div>

          <div className="dictrictForm checkHeader">
            <DistrictInfoForm handleDistrictDetails={updateRecommendDetails} />
          </div>
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
        <div className="formH">
          <div className="inspectionBy ">District Magistrate</div>
        </div>
        {inputNames2.map((ele) => {
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
        <div className="formDataSub my-4">

          <button type="submit" >{saveBtn}</button>
        </div>

      </form>
    </div>
  );
}
