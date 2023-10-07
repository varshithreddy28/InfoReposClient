import React, { useState, useEffect } from "react";
import InputText from "../InputText/input";
// import CheckBox from "../CheckBoxes/checkbox";
import RadioButtonGroup from "../CheckBoxes/checkbox";

export default function RecordFinancialComponents({
  handleRecordFinancialContent,
}) {
  const [recordFinanciallnformation, setRecordFinancialInformation] = useState(
    {}
  );

  const updateRecordFinancialDetails = (value, name) => {
    const oldInfo = JSON.parse(JSON.stringify(recordFinanciallnformation));
    oldInfo[name] = value;
    setRecordFinancialInformation(oldInfo);
  };

  useEffect(() => {
    handleRecordFinancialContent(recordFinanciallnformation);
  }, [recordFinanciallnformation]);

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
      title: "Master Admission and discharge register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[0],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "admission_discharge_register",
    },
    {
      title: "Supervision register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[1],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "supervision_register",
    },
    {
      title: "Medical File and Medical Report",
      options: ["Yes", "No"],
      selectedOption: selectedOption[2],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "medical_file_report",
    },
    {
      title: "Attendance register of children and staff",
      options: ["Yes", "No"],
      selectedOption: selectedOption[3],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "attendance_register",
    },
    {
      title: "Order Book",
      options: ["Yes", "No"],
      selectedOption: selectedOption[4],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "order_book",
    },
    {
      title: "Inquiry report file",
      options: ["Yes", "No"],
      selectedOption: selectedOption[5],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "inquiry_report_file",
    },
    {
      title: "Children’s suggestion book/file",
      options: ["Yes", "No"],
      selectedOption: selectedOption[6],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "children_suggestion_book",
    },
    {
      title: "Voucher, Cash Book, Ledger, Journal, and Annual Accounts",
      options: ["Yes", "No"],
      selectedOption: selectedOption[7],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "financial_records",
    },
    {
      title: "Grant utilization register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[8],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "grant_utilization_register",
    },
    {
      title: "Stock register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[9],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "stock_register",
    },
    {
      title: "Nutrition/diet register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[10],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "nutrition_diet_register",
    },
    {
      title: "Budget statement register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[11],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "budget_statement_register",
    },
    {
      title: "Visitors’ book",
      options: ["Yes", "No"],
      selectedOption: selectedOption[12],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "visitors_book",
    },
    {
      title: "Staff movement register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[13],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "staff_movement_register",
    },
    {
      title: "Personal belonging register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[14],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "personal_belonging_register",
    },
    {
      title: "Children’s movement register",
      options: ["Yes", "No"],
      selectedOption: selectedOption[15],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "children_movement_register",
    },
    {
      title:
        "Details of information about the sources of funding and that of the organization as a whole/separately available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[16],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "funding_info_available",
    },
    {
      title: "Sources of Funding - Government aid/grant",
      options: ["Yes", "No"],
      selectedOption: selectedOption[17],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "government_aid_grant",
    },
    {
      title: "National Donors",
      options: ["Yes", "No"],
      selectedOption: selectedOption[18],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "national_donors",
    },
    {
      title:
        "International Donors under the Foreign Contribution (Regulation) Act 2010",
      options: ["Yes", "No"],
      selectedOption: selectedOption[19],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "international_donors_fcra",
    },
    {
      title: "Corporate Donors",
      options: ["Yes", "No"],
      selectedOption: selectedOption[20],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "corporate_donors",
    },
    {
      title: "Own sources",
      options: ["Yes", "No"],
      selectedOption: selectedOption[21],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "own_sources",
    },
    {
      title: "Others",
      options: ["Yes", "No"],
      selectedOption: selectedOption[22],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "other_sources",
    },
    {
      title:
        "Details of project wise Bank Account(s) maintained by it with A/c No, purpose, amount received including FCRA Account available",
      options: ["Yes", "No"],
      selectedOption: selectedOption[23],
      onChange: handleOptionChange,
      horizontal: true,
      updateInfo: updateRecordFinancialDetails,
      radioInpDetails: radioInpDetails,
      otherValue: "No", // Changed from null to "No"
      label: "bank_accounts_details",
    },
    // Continue with similar objects as needed
  ];

  return (
    <div id="generalInfo">
      <div className="formH">
        <div className="formName">XI. RECORD MAINTENANCE</div>
      </div>
      <div className="scndfrmsubheader">Rule 77: Maintenance of Registers</div>

      {radioInputs.map((radio, index) => {
        return (
          <>
            {index === 16 ? (
              <>
                <div className="formH">
                  <div className="formName">XII. FINANCIAL TRANSPARENCY</div>
                </div>
              </>
            ) : index === 23 ? (
              <>
                <div className="scndfrmsubheader">
                  Rule 53: Accounts and audit of the Authority
                </div>
              </>
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
