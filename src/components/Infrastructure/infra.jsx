import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
import "./infra.css";
import DatePickerComp from "../Date/date";
import InputNumber from "../InputNumber/input";
import InputEmail from "../InputEmail/input";
// import CheckBox from "../CheckBoxes/checkbox";
// import RadioButtonGroup from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../RadioBtn Text/checkbox";

export default function Infrastructure({ handleInfraContent }) {
  const [infraInformation, setInfraInformation] = useState({});

  const updateInfraDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(infraInformation));
    oldInfo[name] = value;
    setInfraInformation(oldInfo);
  };

  const dateNames = [
    {
      name: "Date of Issue",
      updateDetails: updateInfraDetails,
    },
    {
      name: "Date of Expiry",
      updateDetails: updateInfraDetails,
    },
  ];

  useEffect(() => {
    handleInfraContent(infraInformation);
  }, [infraInformation]);

  const inputNames = [
    {
      name: "noofRoomsDom",
      placeholder: "Enter the No. of rooms / dormitories",
      label: "No. of rooms / dormitories",
      updateInputValue: updateInfraDetails,
    },
    {
      name: "provSickMedical",
      placeholder: "Enter the Provision of sick room / medical unit",
      label: "Provision of sick room / medical unit",
      updateInputValue: updateInfraDetails,
    },
    {
      name: "counselingRoom",
      placeholder: "Enter the Details of Counseling Room",
      label: "Counseling Room",
      updateInputValue: updateInfraDetails,
    },
  ];
  const inputNames2 = [
    {
      name: "other_artcl",
      placeholder: "Enter the Other articles provided to the children",
      label: "Other articles provided to the children",
      updateInputValue: updateInfraDetails,
    },
  ];

  const inputNumber = [
    {
      name: "spaceAvailable",
      placeholder: "Enter the Space available for Accomidation",
      label: "Space available",
      updateInputValue: updateInfraDetails,
    },
  ];

  const inputEmail = [
    {
      name: "emailId",
      placeholder: "Enter eMail Id",
      label: "Email Id",
      updateInputValue: updateInfraDetails,
    },
  ];

  // Radio Buttons
  const options = ["Yes", "No"];

  const [selectedOption, setSelectedOption] = useState([{}, {}]);
  const [selectedOption2, setSelectedOption2] = useState([{}, {}]);
  const [selectedOption3, setSelectedOption3] = useState([{}, {}]);
  const [selectedOption4, setSelectedOption4] = useState([{}, {}]);

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
  const handleOptionChange2 = (index, value) => {
    const prevValues = [...selectedOption2];
    prevValues[index] = value;
    setSelectedOption2(prevValues);
  };
  const handleOptionChange3 = (index, value) => {
    const prevValues = [...selectedOption3];
    prevValues[index] = value;
    setSelectedOption3(prevValues);
  };

  const handleOptionChange4 = (index, value) => {
    const prevValues = [...selectedOption4];
    prevValues[index] = value;
    setSelectedOption4(prevValues);
  };

  const radioInputs = [
    {
      options: ["Rented", "Owned"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      title: "Building",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "building",
    },
    {
      options,
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      title: "Are CCTV cameras installed at the entrance ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "cctv_entrance",
    },
    {
      options: ["Adequate", "Inadequate"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      title: "Security",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "security_level",
    },
    {
      options,
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      title: "Sufficient space to accommodate the children",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "accomidation_space",
    },
  ];

  const radioInputs2 = [
    {
      options,
      selectedOption: selectedOption2[0],
      onChange: handleOptionChange2,
      title: "Is there a TV set available with Cable network ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "tvSet_cable",
    },
    {
      options: ["in the evenings", "any time"],
      selectedOption: selectedOption2[1],
      onChange: handleOptionChange2,
      title: "How often are children allowed to view TV ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "child_allowed",
    },
    {
      options,
      selectedOption: selectedOption2[2],
      onChange: handleOptionChange2,
      title: "Are children playing games indoors ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "games_indoors",
    },
    {
      options: ["Age appropriate", "Not age appropriate"],
      selectedOption: selectedOption2[3],
      onChange: handleOptionChange2,
      title: "What games are available to them",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "games_aval",
    },
    {
      options,
      selectedOption: selectedOption2[4],
      onChange: handleOptionChange2,
      title: "Are children playing games outdoors",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "games_outdoors",
    },
    {
      options,
      selectedOption: selectedOption2[5],
      onChange: handleOptionChange2,
      title: "Do they have equipments/ accessories to play ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "equipment_avail",
    },
    {
      options,
      selectedOption: selectedOption2[6],
      onChange: handleOptionChange2,
      title: "Do children go for picnics/excursions ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "picnics",
    },
    {
      options,
      selectedOption: selectedOption2[7],
      onChange: handleOptionChange2,
      title: "Do they have interactions with eminent personalities",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "interactions_eminent",
    },
    {
      options,
      selectedOption: selectedOption2[8],
      onChange: handleOptionChange2,
      title: "Is there a recreation room available to children ?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "Others",
      label: "reaction_room",
    },
  ];

  const radioInputs3 = [
    {
      title: "Is the cooking area and pantry separate",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[0], // Start with 0 for selectedOption3
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "cooking_area",
    },
    {
      title: "Do children get individual thalis, mugs, glasses",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[1],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "child_individual_mugs",
    },
    {
      title: "Are cooking utensils adequate and clean",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[2],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "cooking_clean",
    },
    {
      title: "Is there a fridge available for children",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[3],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "fridge_avl",
    },
    {
      title: "Is there an Oven available for children",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[4],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "oven_available",
    },
    {
      title: "Is there a Gas stove available in kitchen",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[5],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "gas_available",
    },
    {
      title: "Is there a chimney available",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[6],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "chimney_available",
    },
    {
      title: "What is the arrangement to keep the gas cylinders",
      options: ["Safe/Away from Children", "Not Away from Children"],
      selectedOption: selectedOption3[7],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "gas_arrangement",
    },
    {
      title: "Adequate water supply for washing, cooking",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[8],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "water_cooking_clean",
    },
    {
      title: "Adequate drinking water available (RO)",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[9],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "water_drinking",
    },
    {
      title: "Is cooking done by machines or by cook",
      options: ["Machines", "Cook"],
      selectedOption: selectedOption3[10],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "cooking_done_by",
    },
    {
      title: "Flush is working",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[11], // Start with 11 for selectedOption3
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "flush_working",
    },
    {
      title: "Taps in the wash basin are functioning",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[12],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "taps_functioning",
    },
    {
      title: "Is the floor slippery",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[13],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "floor_slippery",
    },
    {
      title: "Drains clean",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[14],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "drains_clean",
    },
    {
      title: "Drains are clogged",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[15],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "drains_clogged",
    },
    {
      title: "Fittings for hanging clothes/ towels in place",
      options: ["Once", "More in a Day"],
      selectedOption: selectedOption3[16],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "fittings_in_place",
    },
    {
      title: "Cobwebs are removed",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[17],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "cobwebs_removed",
    },
    {
      title: "Door has a latch",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[18],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "door_has_latch",
    },
    {
      title: "Door has peep holes",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[19],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "door_has_peepholes",
    },
    {
      title: "Frequency of bath a child is allowed",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[20],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "bath_frequency_allowed",
    },
    {
      title: "Water is adequately available",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[21],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "adequate_water_available",
    },
    {
      title: "Adequate numbers of buckets and mugs",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[22],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "adequate_buckets_mugs",
    },
    {
      title: "Personal toiletries are provided",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[23],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "personal_toiletries_provided",
    },
    {
      title: "Is washing powder or soap given",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[24],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "washing_powder_soap_given",
    },
    {
      title: "Do children wash their own clothes",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[25],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "children_wash_own_clothes",
    },
    {
      title: "Is there a washer man available",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[26],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "washer_man_available",
    },
    {
      title: "Is the washing machine functional",
      options: ["Yes", "No"],
      selectedOption: selectedOption3[27],
      onChange: handleOptionChange3,
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "washing_machine_functional",
    },
  ];
  // Now modifiedArray contains the updated objects with the specified text and settings.

  const radioInputs4 = [
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[0], // Start with 10 for selectedOption4
      onChange: handleOptionChange4,
      title: "Does the home have a child-friendly indoors?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "child_friendly_indoors",
    },
    {
      options: ["Twice a Day", "More than Twice a Day"],
      selectedOption: selectedOption4[1],
      onChange: handleOptionChange4,
      title: "How often is the sweeping and swabbing done?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "sweeping_frequency",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[2],
      onChange: handleOptionChange4,
      title:
        "Are the children involved in the cleaning exercise during class hours?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "child_involvement_cleaning",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[3],
      onChange: handleOptionChange4,
      title: "Are the facilities of coolers/heaters available for children?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "coolers_heaters_available",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[4],
      onChange: handleOptionChange4,
      title: "Are the doors and windows maintained properly?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "doors_windows_maintenance",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[5],
      onChange: handleOptionChange4,
      title: "Are the rooms and dormitories well-ventilated?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "well_ventilated_rooms",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[6],
      onChange: handleOptionChange4,
      title:
        "Is there an alternate provision for lights and fans when there is no electricity available?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "alternate_lights_fans",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[7],
      onChange: handleOptionChange4,
      title: "Are the outdoors clean, pleasant, and child-friendly?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "clean_child_friendly_outdoors",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[8],
      onChange: handleOptionChange4,
      title: "Are the clothes provided as per size and season?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "clothes_size_season",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[9],
      onChange: handleOptionChange4,
      title: "Frequency of changing undergarments?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "undergarments_change_frequency",
    },
    {
      options: ["Stitched", "Bought"],
      selectedOption: selectedOption4[10],
      onChange: handleOptionChange4,
      title: "New clothes are stitched or bought?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "new_clothes_stitched_or_bought",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[11],
      onChange: handleOptionChange4,
      title: "Are the mattresses given individually?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "individual_mattresses",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[12],
      onChange: handleOptionChange4,
      title: "Are pillows given individually?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "individual_pillows",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[13],
      onChange: handleOptionChange4,
      title: "Are the mattress and pillows clean?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "clean_mattress_pillows",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[14],
      onChange: handleOptionChange4,
      title: "Do children have separate cupboards?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "separate_cupboards_children",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[15],
      onChange: handleOptionChange4,
      title: "Are bed sheets and Khes available?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "bed_sheets_khes_available",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[16],
      onChange: handleOptionChange4,
      title: "Are blankets available in winters?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "blankets_available_winters",
    },
    {
      options: ["one", "two", "three", "four"],
      selectedOption: selectedOption4[17],
      onChange: handleOptionChange4,
      title: "Number of sets provided on arrival",
      horizontal: false,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "sets_provided_on_arrival",
    },
    {
      options: ["Monthly", "Quarterly"],
      selectedOption: selectedOption4[18],
      onChange: handleOptionChange4,
      title: "Frequency of providing new clothes",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "new_clothes_frequency",
    },
    {
      options: ["Same", "Different"],
      selectedOption: selectedOption4[19],
      onChange: handleOptionChange4,
      title: "Are these sets of the same color or different colors?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "sets_color",
    },
    {
      options: ["Yes", "No"],
      selectedOption: selectedOption4[20],
      onChange: handleOptionChange4,
      title:
        "Are children provided with individual lockers to keep their personal items?",
      horizontal: true,
      updateInfo: updateInfraDetails,
      radioInpDetails: radioInpDetails,
      otherValue: null,
      label: "individual_lockers_children",
    },
  ];

  const handleLocalSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="genHeader">C. Infrastructure</div>
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
        {inputNumber.map((ele) => {
          return (
            <>
              <InputNumber {...ele} />
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
        {/* Radio Btns */}
        <div className="genHeader">Recreational / activity room for Children</div>
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
        <div className="genHeader">Kitchen / Dining Room</div>
        {radioInputs3.map((radio, index) => {
          return (
            <>
              {index === 11 ? (
                <div className="genHeader">
                  Number of toilets & bathrooms for Children
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

        <div className="genHeader">Premises</div>
        {radioInputs4.map((radio, index) => {
          return (
            <>
              {index === 8 ? (
                <div className="genHeader">
                  Clothing / Bedding/Lockers/ Toiletries provided to the children
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

        {inputNames2.map((ele) => {
          return (
            <>
              <InputText {...ele} />
            </>
          );
        })}
        <div className="formDataSub my-4">

          <button type="submit">Save Data</button>
        </div>
      </form>
    </div>
  );
}
