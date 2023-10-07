import React, { useState, useEffect } from "react";
import "./staff.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import StaffFormDynamic from "../DynamicStaff/namesform";

export default function StaffForm({ handleStaffContent }) {
  const [details, setDetails] = useState({
    date: "",
    names: [],
  });
  const [names, setNames] = useState([]);

  const handleAddNames = (arr) => {
    // console.log(arr);
    handleStaffContent(arr);
  };

  return (
    <div>
      <div className="genHeader">E. Staff Details </div>

      <div className="headerInp">
        <StaffFormDynamic
          title={"Name of the officials inspecting the Home"}
          handleAddNames={handleAddNames}
        />
      </div>
    </div>
  );
}
