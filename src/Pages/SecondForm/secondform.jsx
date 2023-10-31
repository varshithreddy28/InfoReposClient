import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Second Form//header/header";
import { useState, useEffect } from "react";
import axios from "axios";

import "./secondform.css";
import Accordion from "react-bootstrap/Accordion";

import { useNavigate } from "react-router-dom";
import LegalStatus from "../../components/Second Form/LegalStatus/legalStatus";
import PhysicalInfra from "../../components/Second Form/Physical Infra/physical";
import Management from "../../components/Second Form/Managing Pattern/managing";
import Functionality from "../../components/Second Form/Functionality/functionality";
import MultipleComponents from "../../components/Second Form/Multiple Components/multiple";
import RecordFinancialComponents from "../../components/Second Form/Records Financial/recordfinancial";
import Recomend from "../../components/Second Form/Recomendation/recomend";
import Status from "../../components/Second Form/Status/Status";
import { Container } from "react-bootstrap";
import MultipleComponentsP2 from "../../components/Second Form/Multiple ComponentsPart2/multiple";


function SecondForm({ handleFormSuccess }) {
  let navigate = useNavigate();

  const [data, setData] = useState({
    headerContent: {},
    legalContent: {},
    physicalInfraContent: {},
    managementContent: {},
    functionalityContent: {},
    multipleContent: {},
    multipleContent2: {},
    record_financial_Content: {},
    recommendContent: {},
  });

  const [headerContent, setheaderContent] = useState({});
  const [legalContent, setLegalContent] = useState({});
  const [physicalInfraContent, setphysicalInfraContent] = useState({});
  const [managementContent, setmanagementContent] = useState({});
  const [functionalityContent, setfunctionalityContent] = useState({});
  const [multipleContent, setmultipleContent] = useState({});
  const [multipleContent2, setmultipleContent2] = useState({});
  const [record_financial_Content, set_record_financial_Content] = useState({});
  const [recommendContent, setRecommendContent] = useState({});
  const [statusContent, setStatusContent] = useState({});

  const [show, setShow] = useState(true);
  const [alertMsg, setAlertmsg] = useState(null);

  const [submiting, setSubmiting] = useState(false);

  const handleHeaderContent = (content) => {
    setheaderContent(content);
  };

  const handleLegalContent = (content) => {
    setLegalContent(content);
  };

  const handlephysicalInfraContent = (content) => {
    setphysicalInfraContent(content);
  };

  const handlemanagementContent = (content) => {
    setmanagementContent(content);
  };

  const handlefunctionalityContent = (content) => {
    setfunctionalityContent(content);
  };

  const handlemultipleContent = (content) => {
    setmultipleContent(content);
  };
  const handlemultipleContent2 = (content) => {
    setmultipleContent2(content);
  };
  const handleRecordFinancialContent = (content) => {
    set_record_financial_Content(content);
  };

  const handleRecommendContent = (content) => {
    setRecommendContent(content);
  };

  useEffect(() => {
    setData({
      headerContent,
      statusContent,
      legalContent,
      physicalInfraContent,
      managementContent,
      functionalityContent,
      multipleContent,
      multipleContent2,
      record_financial_Content,
      recommendContent,
    });
  }, [
    headerContent,
    statusContent,
    legalContent,
    physicalInfraContent,
    managementContent,
    functionalityContent,
    multipleContent,
    multipleContent2,
    record_financial_Content,
    recommendContent,
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Form

  const [formErr, setformErr] = useState(null);

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
    for (const key in formDataArr) {
      const element = formDataArr[key];
      if (element.content.length <= 0) {
        setformErr(element.errmsg);
      }
    }
    const contctValidation = {
      content: data.genContent.contactNo,
      errmsg: "Enter a Valid Contact Number",
    };
    if (
      contctValidation.content.toString().length < 10 ||
      contctValidation.content.toString().length > 11
    ) {
      console.log("jshghf");
      setformErr(contctValidation.errmsg);
    }
  };

  const handleStatusContent = (content) => {
    setStatusContent(content);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmiting(true);
    const tokenCookie = localStorage.getItem("accessToken");

    if (formErr === null)
      try {
        const response = await axios.post(
          "https://inforeposerver.onrender.com/addFormTwo",
          // "http://localhost:3000/addFormTwo",
          { ...data },
          {
            headers: {
              authorization: tokenCookie,
              "Content-Type": "application/json",
            },
          }
        );
        setSubmiting(false);
        if (response.status === 200) {
          console.log("Submitted the Form");
          // navigate("thankyou");
        } else setformErr(response.data.message);
      } catch (error) {
        console.log(error);
        setShow(true);
        console.log("jghhjg");
        setformErr(error.response.data.message);
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
        <div className="formName">FORM 46A</div>
        <div className="rule">[Rule 21(3) and Rule 21(15)]</div>
        <div className="inspectionBy">
          INSPECTION FORMAT FOR REGISTERATION AND RENEWAL OF A CHILD CARE
          INSTITUTION
        </div>
      </div>
      <div className="accordation_cnt my-5">
        <Accordion>
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
              <span className="detailsfill">Legal Status</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <LegalStatus handleLegalContent={handleLegalContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">PHYSICAL INFRASTRUCTURE</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <PhysicalInfra
                  handlePhysicalInfraContent={handlephysicalInfraContent}
                />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Management/ Staffing Parttner</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Management handleManagementContent={handlemanagementContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Functionality</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Functionality
                  handleFunctionalityContent={handlefunctionalityContent}
                />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Preservation and  Protection from Abuse, Daily Routines</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <MultipleComponents handleMultipleContent={handlemultipleContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Nutrition and  Recreation, Clothing, Bedding Hygine , Health Care & Education</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <MultipleComponentsP2 handleMultipleContent={handlemultipleContent2} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Record Maintanance & Financial Transparency</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <RecordFinancialComponents
                  handleRecordFinancialContent={handleRecordFinancialContent}
                />
              </Container>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="10">
            <Accordion.Header>
              {" "}
              <span className="detailsfill">Recommendation by District Magistrate for Registration</span>
            </Accordion.Header>
            <Accordion.Body className="py-4">
              <Container >
                <Recomend handleRecomendContent={handleRecommendContent} />
              </Container>
            </Accordion.Body>
          </Accordion.Item>



          {/* <Status handleStatusContent={handleStatusContent} />
        <Infrastructure handleInfraContent={handleInfraContent} />
        <Service handleServiceContent={handleServiceContent} />
        <StaffForm handleStaffContent={handlestaffContent} />
        <Committe handleCommitteContent={handleCommitteContent} />
        <RecordMaintenance handleRecordContent={handleRecordContent} />
        <Remarks handleRemarkContent={handleRemarkContent} /> */}
          {/* <Submit data={data} /> */}
        </Accordion>
      </div>
      <div className="formSubmitBtn">
        <button type="submit" id="btnsbmit" onClick={handleFormSubmit}>
          {submiting
            ? "Submiting the  Inspection Report Please Wait!!!"
            : "Submit Inspection Report"}
        </button>
      </div>
    </div>
  );
}

export default SecondForm;
