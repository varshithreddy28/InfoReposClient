import React, { useState, useEffect } from "react";

export default function UserDrop({ dropvalues, updateDropDetails, value }) {
  const [selectedDrop, setSelectedDrop] = useState("");

  useEffect(() => {
    updateDropDetails(selectedDrop);
  }, [selectedDrop]);

  return (
    <div>
      <div className="inputComp">
        <label className="nameFormHeader">{value}</label>
        <div className="inpCompTxt">
          <select
            required
            className="form-control"
            value={selectedDrop}
            onChange={(e) => setSelectedDrop(e.target.value)}
          >
            <option value="">Select District</option>
            {dropvalues.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
