import React, { useState, useEffect } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerComp({ name, updateDetails }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChangeComp = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    updateDetails(selectedDate, name);
  }, [selectedDate]);

  return (
    <div>
      <div className="inpOneH">
        <div className="inpDate">
          <label className="dndt">{name}</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChangeComp}
            dateFormat="MM/dd/yyyy"
            required={true}
          />
        </div>
      </div>
    </div>
  );
}
