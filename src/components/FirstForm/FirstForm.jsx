import Committe from "../ChildrenComitte/committe";
import General from "../GeneralInfo/general";
import Infrastructure from "../Infrastructure/infra";
import RecordMaintenance from "../Record Maintanace/record";
import Remarks from "../Remarks/remark";
import Service from "../Services/services";
import StaffForm from "../StaffForm/staff";
import Status from "../Status/Status";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header/header";
import { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";


import "./firstform.css";

import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function FirstForm({ handleFormSuccess }) {
  let navigate = useNavigate();

  const [data, setData] = useState({
    headerContent: {},
    genContent: {},
    staffContent: {},
    infraContent: {},
    servicesContent: {},
    committeContent: {},
    recordMaintenanceContent: {},
    remarksContent: {},
  });
  const [submiting, setSubmiting] = useState(false);
  const [headerContent, setheaderContent] = useState({});
  const [genContent, setGenContent] = useState({});
  const [statusContent, setStatusContent] = useState({});
  const [infraContent, setInfraContent] = useState({});
  const [servicesContent, setServiceContent] = useState({});
  const [staffContent, setStaffContent] = useState({});
  const [committeContent, setCommitteContent] = useState({});
  const [recordMaintenanceContent, setrecordMaintenanceContent] = useState({});
  const [remarksContent, setremarksContent] = useState({});
  const [validData, setValidData] = useState(false);
  const [show, setShow] = useState(true);
  const [alertMsg, setAlertmsg] = useState(null);

  const handleHeaderContent = (content) => {
    setheaderContent(content);
  };

  const handleGeneralContent = (content) => {
    setGenContent(content);
  };

  const handleStatusContent = (content) => {
    setStatusContent(content);
  };

  const handleInfraContent = (content) => {
    setInfraContent(content);
  };

  const handleServiceContent = (content) => {
    setServiceContent(content);
  };

  const handlestaffContent = (content) => {
    setStaffContent(content);
  };

  const handleCommitteContent = (content) => {
    setCommitteContent(content);
  };

  const handleRecordContent = (content) => {
    setrecordMaintenanceContent(content);
  };

  const handleRemarkContent = (content) => {
    setremarksContent(content);
  };

  useEffect(() => {
    setData({
      headerContent,
      genContent,
      staffContent,
      infraContent,
      servicesContent,
      committeContent,
      statusContent,
      recordMaintenanceContent,
      remarksContent,
    });
  }, [
    headerContent,
    genContent,
    staffContent,
    infraContent,
    servicesContent,
    committeContent,
    statusContent,
    recordMaintenanceContent,
    remarksContent,
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Form

  const [formErr, setformErr] = useState(null);

  const formDataObject = {
    headerContent: {
      date: "",
      time: "",
      names: [""],
    },
    genContent: {
      name_of_the_Department: "",
      organizationName: "",
      organizationAddress: "",
      registrationNo: "",
      completeAddressCCI: "",
      personIncharge: "",
      contactNo: "",
      emailId: "",
      type_home: "",
    },
    // Array
    staffContent: [
      {
        name: "",
        designation: "",
        joiningDate: "",
        attendance: "",
        remarks: "",
      },
      {
        name: "",
        designation: "",
        joiningDate: "",
        attendance: "",
        remarks: "",
      },
    ],
    infraContent: {
      other_artcl: "",
      building: "",
      cctv_entrance: "",
      security_level: "",
      accomidation_space: "",
      spaceAvailable: "",
      noofRoomsDom: "",
      provSickMedical: "",
      counselingRoom: "",
      tvSet_cable: "",
      child_allowed: "",
      games_indoors: "",
      games_aval: "",
      games_outdoors: "",
      equipment_avail: "",
      picnics: "",
      interactions_eminent: "",
      reaction_room: "",
      cooking_area: "",
      child_individual_mugs: "",
      cooking_clean: "",
      fridge_avl: "",
      oven_available: "",
      gas_available: "",
      chimney_available: "",
      gas_arrangement: "",
      water_cooking_clean: "",
      water_drinking: "",
      cooking_done_by: "",
      flush_working: "",
      taps_functioning: "",
      floor_slippery: "",
      drains_clean: "",
      drains_clogged: "",
      fittings_in_place: "",
      cobwebs_removed: "",
      door_has_latch: "",
      door_has_peepholes: "",
      bath_frequency_allowed: "",
      adequate_water_available: "",
      adequate_buckets_mugs: "",
      personal_toiletries_provided: "",
      washing_powder_soap_given: "",
      children_wash_own_clothes: "",
      washer_man_available: "",
      washing_machine_functional: "",
      child_friendly_indoors: "",
      sweeping_frequency: "",
      child_involvement_cleaning: "",
      coolers_heaters_available: "",
      doors_windows_maintenance: "",
      well_ventilated_rooms: "",
      alternate_lights_fans: "",
      clean_child_friendly_outdoors: "",
      clothes_size_season: "",
      undergarments_change_frequency: "",
      new_clothes_stitched_or_bought: "",
      individual_mattresses: "",
      individual_pillows: "",
      clean_mattress_pillows: "",
      separate_cupboards_children: "",
      bed_sheets_khes_available: "",
      blankets_available_winters: "",
      sets_provided_on_arrival: "",
      new_clothes_frequency: "",
      sets_color: "",
      individual_lockers_children: "",
    },
    servicesContent: {
      other_programs_and_activities: "",
      medicalFacilitiesHealth: "",
      nutritionSplDiet: "",
      provOfDrinkingWater: "",
      morningActivities: "",
      dayTimeActivities: "",
      afternoonActivities: "",
      eveningActivities: "",
      computer_with_internet: "",
      facility_functional: "",
      children_use_facility: "",
      official_purpose_telephone: "",
      children_use_telephone: "",
      childline_displayed_near_phone: "",
      counseling_services: "",
      vocational_training: "",
      recreational_facilities: "",
      linkages_with_agencies: "",
      missing_child_programme_entries: "",
      missing_child_programme_user: "",
    },
    committeContent: {
      constitution_of_management_committee: "",
      formation_child_committe: "",
      ageFormation: "",
      committeeMeetingFrequency: "",
      formation_management_committe: "",
      frequency_meetings: "",
    },
    statusContent: {
      children_Interventions: "",
      Sanction_capacity_Home: "",
      number_of_children: "",
      bathing_sleeping: "",
      // eslint-disable-next-line no-dupe-keys
      children_Interventions: { type: String, required: true },
      seven_to_eleven_yrs: "",
      "12_18_years": "",
      children_0_5: "",
      children_18_abv: "",
      care_plans: "",
      childre_special_needs: "",
      newAdmissions_cur_month: "",
      children_released: "",
      "children_referred_CWC/JJB": "",
      "children_produced_CWC/JJB": "",
      children_prev_mnth: "",
      children_spl_needs: "",
    },
    recordMaintenanceContent: {
      otherRecordMaintained: "",
      staff_attendance: "",
      children_attendance: "",
      central_admission: "",
      individual_case_file: "",
      communication_cwc_jjb: "",
      children_suggestion_book: "",
      children_suggestion_box: "",
      medical_file: "",
      personal_belongings_register: "",
      management_committee_minutes: "",
      children_committee_minutes: "",
      nutrition_diet_file: "",
    },
    // Array
    remarksContent: [
      {
        committeeMemberName: "",
        placeVisit: "",
        inspectionDate: "",
        employeeId: "",
        remarks: "",
      },
      {
        committeeMemberName: "",
        placeVisit: "",
        inspectionDate: "",
        employeeId: "",
        remarks: "",
      },
    ],
  };

  const formDataArr = {
    headerNames: {
      content: data.headerContent.names,
      errmsg: "Enter the Name of the officials inspecting",
    },
    staffContent: {
      content: data.staffContent,
      errmsg: "Enter all the Staff Details",
    },
    remarksContent: {
      content: data.remarksContent,
      errmsg: "Enter Details of the Committee Members",
    },
  };

  const handleFormErrs = () => {
    let isformError = false;
    for (const key in formDataArr) {
      const element = formDataArr[key];
      if (element.content.length <= 0) {
        setformErr(element.errmsg);
        isformError = true;
        break;
      }
    }

    // If the formDataArr has any validation Err
    if (isformError) {
      setValidData(false); // data Validation is not Done
      return false;
    }

    const contctValidation = {
      content: data.genContent.contactNo,
      errmsg: "Enter a Valid Contact Number in General Information",
    };
    if (
      contctValidation.content.toString().length < 10 ||
      contctValidation.content.toString().length > 10
    ) {
      isformError = true;
      setformErr(contctValidation.errmsg);
    }
    // If the formDataArr has any validation Err
    if (isformError) {
      setValidData(false); // data Validation is not Done
      return false;
    } else {
      // If it comes until here then there will be no Erros in form Validation
      setValidData(true);
      return true;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Submiting FORMJKJHBJ")
    console.log(data)
    const tokenCookie = localStorage.getItem("accessToken");
    const canSubmit = handleFormErrs();
    console.log(validData);
    setSubmiting(true);

    if (canSubmit === true) {
      //   console.log("Submiting the Form");
      try {
        const response = await axios({
          method: "post",
          url: "https://inforeposerver.onrender.com/addformOne",
          // url: "http://localhost:3000/addformOne",
          data: data,
          headers: {
            authorization: tokenCookie,
            "Content-Type": "application/json",
          },
        });
        setSubmiting(false);
        if (response.status === 200) {
          console.log("Submitted the Form");
          navigate("thankyou");
        } else setformErr(response.data.message);
      } catch (error) {
        setShow(true);
        console.log("jghhjg");
        setformErr(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (formErr) toast.error(formErr);
    const timeoutId = setTimeout(() => {
      setformErr(null);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, [formErr]);

  return (
    <div className="App container">
      <Accordion>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="formH">
          <div className="formName">FORM 46</div>
          <div className="rule">[Rule 41(3) and 41 (9)]</div>
          <div className="inspectionBy">INSPECTION BY INSPECTION COMMITTEE</div>
        </div>
        <div className="accordation_cnt my-5">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Inspection Information</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Header handleHeaderContent={handleHeaderContent} />

              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">General Information</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <General handleGeneralContent={handleGeneralContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Status of Children</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Status handleStatusContent={handleStatusContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Infrastructure</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Infrastructure handleInfraContent={handleInfraContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Services provided to the children</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Service handleServiceContent={handleServiceContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Staff Details</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <StaffForm handleStaffContent={handlestaffContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Children’s Committee / Management Committee</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Committe handleCommitteContent={handleCommitteContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Record Maintenance</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <RecordMaintenance handleRecordContent={handleRecordContent} />

              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Observations/ Remarks</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Remarks handleRemarkContent={handleRemarkContent} />

              </Container>
            </Accordion.Body>
          </Accordion.Item>
        </div>

        {/* <Submit data={data} /> */}

        <div className="formSubmitBtn">
          <button type="button" id="btnsbmit" onClick={handleFormSubmit}>
            {validData
              ? submiting
                ? "Submiting the  Inspection Report Please Wait!!!"
                : "Submit Inspection Report"
              : "Submit Inspection Report"}
          </button>
        </div>
      </Accordion>

    </div>
  );
}

export default FirstForm;
