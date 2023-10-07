import React from "react";
import "./submit.css";

export default function Submit({ data }) {
  const handleOnSubmit = (e) => {
    // e.preventDefault();
    console.log(data);
  };

  return (
    <div className="submitForm">
      <button className="submitBtn" type="submit" onClick={handleOnSubmit}>
        Submit
      </button>
    </div>
  );
}
