import React, { useState, useEffect } from "react";
import styles from "./DistrictInfoForm.module.css";

function DistrictInfoForm({ handleDistrictDetails }) {
  const [numChildCareInstitutions, setNumChildCareInstitutions] = useState("");
  const [childrenHome, setChildrenHome] = useState("");
  const [observationHome, setObservationHome] = useState("");
  const [shelterHome, setShelterHome] = useState("");
  const [specialHome, setSpecialHome] = useState("");
  const [specialAdoptionAgency, setSpecialAdoptionAgency] = useState("");
  const [numJuvenileJusticeBoards, setNumJuvenileJusticeBoards] = useState("");
  const [numChildWelfareCommittees, setNumChildWelfareCommittees] =
    useState("");
  const [numDistrictInspectionCommittees, setNumDistrictInspectionCommittees] =
    useState("");

  const [districtDetails, setDistrictDetails] = useState();

  const inputStyle = {
    border: "none",
    borderBottom: "1px solid #000", // You can change the color here
    outline: "none",
    transition: "borderBottom 0.3s ease",
    ":focus": {
      borderBottom: "2px solid #000", // Border style when focused
    },
    width: "4em",
  };

  const inputStyle2 = {
    border: "none",
    borderBottom: "1px solid #000", // You can change the color here
    outline: "none",
    transition: "borderBottom 0.3s ease",
    ":focus": {
      borderBottom: "2px solid #000", // Border style when focused
    },
    width: "6.5em",
  };

  useEffect(() => {
    setDistrictDetails({
      numChildCareInstitutions,
      childrenHome,
      observationHome,
      shelterHome,
      specialHome,
      specialAdoptionAgency,
      numJuvenileJusticeBoards,
      numChildWelfareCommittees,
      numDistrictInspectionCommittees,
    });
  }, [
    numChildCareInstitutions,
    childrenHome,
    observationHome,
    shelterHome,
    specialHome,
    specialAdoptionAgency,
    numJuvenileJusticeBoards,
    numChildWelfareCommittees,
    numDistrictInspectionCommittees,
  ]);

  useEffect(() => {
    handleDistrictDetails(districtDetails, "districtDetails");
  }, [districtDetails]);

  return (
    <div>
      <p>
        2. The district already has{" "}
        <input
          type="number"
          value={numChildCareInstitutions}
          onChange={(e) => setNumChildCareInstitutions(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        No. of Child Care Institutions (viz.,{" "}
        <input
          type="number"
          value={childrenHome}
          onChange={(e) => setChildrenHome(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Children Home,{" "}
        <input
          type="number"
          value={observationHome}
          onChange={(e) => setObservationHome(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Observation Home,{" "}
        <input
          type="number"
          value={shelterHome}
          onChange={(e) => setShelterHome(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Shelter Home,{" "}
        <input
          type="number"
          value={specialHome}
          onChange={(e) => setSpecialHome(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Special Home,{" "}
        <input
          type="number"
          value={specialAdoptionAgency}
          onChange={(e) => setSpecialAdoptionAgency(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Special Adoption Agency) and{" "}
        <input
          type="number"
          value={numJuvenileJusticeBoards}
          onChange={(e) => setNumJuvenileJusticeBoards(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Juvenile Justice Boards,{" "}
        <input
          type="number"
          value={numChildWelfareCommittees}
          onChange={(e) => setNumChildWelfareCommittees(e.target.value)}
          style={inputStyle}
          required
          min={0}
        />{" "}
        Child Welfare Committees,{" "}
        <input
          type="text"
          value={numDistrictInspectionCommittees}
          onChange={(e) => setNumDistrictInspectionCommittees(e.target.value)}
          style={inputStyle2}
          required
        />{" "}
        District Inspection Committees and has /does not have (tick as
        applicable) a requirement for additional Child Care Institution{" "}
      </p>
    </div>
  );
}

export default DistrictInfoForm;
