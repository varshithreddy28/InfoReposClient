import React, { useState, useEffect } from "react";
import "./remarks.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import RecordDynamic from "../Remarks Dynamic/namesform";
// import RecordDynamic from "../DynamicStaff copy/namesform";

export default function Remarks({ handleRemarkContent }) {
  const handleCommitteeDetails = (arr) => {
    console.log(arr);
    handleRemarkContent(arr);
  };

  return (
    <div>
      <div className="genHeader">Observations/ Remarks </div>

      <div className="headerInp">
        <RecordDynamic
          title={"Name of the officials inspecting the Home"}
          handleCommitteeDetails={handleCommitteeDetails}
        />
      </div>
    </div>
  );
}
