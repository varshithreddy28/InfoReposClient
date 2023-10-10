import React, { useState, useEffect } from "react";
import "./stateDist.css";

function StateDistrictSelector({ updateHeaderDetails }) {
  // Define hardcoded states and districts
  const states = ["Telangana"];
  const districts = {
    "Andhra Pradesh": [
      "Anjaw",
      "Changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Lepa Rada",
      "Lohit",
      "Longding",
      "Lower Dibang Valley",
      "Lower Siang",
      "Lower Subansiri",
      "Namsai",
      "Pakke Kessang",
      "Papum Pare",
      "Shi Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
      "Capital Complex Itanagar",
    ],
    Telangana: [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagital",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal-Malkajgiri",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Hanamkonda (erstwhile Warangal (Urban))",
      "Yadadri Bhuvanagiri",
      "Mulugu",
      "Narayanpet",
    ],
  };

  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  useEffect(() => {
    updateHeaderDetails(selectedDistrict, "district");
  }, [selectedDistrict]);
  useEffect(() => {
    updateHeaderDetails(selectedState, "state");
  }, [selectedState]);

  return (
    <div className="inputComp">
      <label className="nameFormHeader">Select a State:</label>
      <div className="inpCompTxt">
        <select
          required
          className="form-control"
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict(""); // Reset selected district when changing the state
          }}
        >
          <option value="">Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div className="inputComp">
        <label className="nameFormHeader">Select a District:</label>
        <div className="inpCompTxt">
          <select
            required
            className="form-control"
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            disabled={!selectedState} // Disable the district selection if no state is selected
          >
            <option value="">Select District</option>
            {selectedState &&
              districts[selectedState].map((district, index) => (
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

export default StateDistrictSelector;
