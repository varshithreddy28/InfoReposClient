import React, { useState, useEffect } from "react";
import "./header.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import NameForm from "../DynamicName/namesform";

export default function Header({ handleHeaderContent }) {
  const [detailsHeader, setDetailsHeader] = useState({
    date: "",
    time: "",
    names: [],
  });
  const [selectedDateHeader, setSelectedDateHeader] = useState(new Date());
  const [selectedTimeHeader, setSelectedTimeHeader] = useState("12:00");
  const [namesHeader, setNamesHeader] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDateHeader(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTimeHeader(time);
  };

  useEffect(() => {
    const updatedDetails = { ...detailsHeader };
    updatedDetails.date = selectedDateHeader
      ? selectedDateHeader.toDateString()
      : "";
    updatedDetails.time = selectedTimeHeader;
    updatedDetails.names = namesHeader;
    setDetailsHeader(updatedDetails);
  }, [selectedDateHeader, selectedTimeHeader, namesHeader]);

  useEffect(() => {
    //   console.log(details);
    handleHeaderContent(detailsHeader);
  }, [detailsHeader]);

  const handleAddNames = (arr) => {
    setNamesHeader(arr);
  };

  return (
    <div>
      <div className="formHeader">
        <div className="formH">
          <div className="formName">FORM 46</div>
          <div className="rule">[Rule 41(3) and 41 (9)]</div>
          <div className="inspectionBy">INSPECTION BY INSPECTION COMMITTEE</div>
        </div>
        <div className="headerInp">
          <div className="inpOneH">
            <div className="inpDate">
              <label className="dndt">Date of Visit </label>
              <DatePicker
                selected={selectedDateHeader}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                required={true}
              />
            </div>
            <div className="inpTime">
              <label className="dndt">Time of Visit </label>
              <TimePicker
                value={selectedTimeHeader}
                onChange={handleTimeChange}
                disableClock={true} // Add this line to disable the clock input
                required={true}
              />
            </div>
          </div>
          <NameForm
            title={"Name of the officials inspecting the Home"}
            handleAddNames={handleAddNames}
          />
        </div>
      </div>
    </div>
  );
}
