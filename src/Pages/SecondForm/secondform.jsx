import General from "../../components/Second Form/GeneralInfo/general";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Second Form//header/header";
import { useState, useEffect } from "react";
import axios from "axios";

import "./secondform.css";

import { useNavigate } from "react-router-dom";
import LegalStatus from "../../components/Second Form/LegalStatus/legalStatus";
import PhysicalInfra from "../../components/Second Form/Physical Infra/physical";
import Management from "../../components/Second Form/Managing Pattern/managing";
import Functionality from "../../components/Second Form/Functionality/functionality";
import MultipleComponents from "../../components/Second Form/Multiple Components/multiple";
import RecordFinancialComponents from "../../components/Second Form/Records Financial/recordfinancial";
import Recomend from "../../components/Second Form/Recomendation/recomend";

function SecondForm({ handleFormSuccess }) {
  let navigate = useNavigate();

  const [data, setData] = useState({
    headerContent: {},
    legalContent: {},
    physicalInfraContent: {},
    managementContent: {},
    functionalityContent: {},
    multipleContent: {},
    record_financial_Content: {},
    recommendContent: {},
  });

  const [headerContent, setheaderContent] = useState({});
  const [legalContent, setLegalContent] = useState({});
  const [physicalInfraContent, setphysicalInfraContent] = useState({});
  const [managementContent, setmanagementContent] = useState({});
  const [functionalityContent, setfunctionalityContent] = useState({});
  const [multipleContent, setmultipleContent] = useState({});
  const [record_financial_Content, set_record_financial_Content] = useState({});
  const [recommendContent, setRecommendContent] = useState({});

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

  const handleRecordFinancialContent = (content) => {
    set_record_financial_Content(content);
  };

  const handleRecommendContent = (content) => {
    setRecommendContent(content);
  };

  useEffect(() => {
    setData({
      headerContent,
      legalContent,
      physicalInfraContent,
      managementContent,
      functionalityContent,
      multipleContent,
      record_financial_Content,
      recommendContent,
    });
  }, [
    headerContent,
    legalContent,
    physicalInfraContent,
    managementContent,
    functionalityContent,
    multipleContent,
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(formErr);
    console.log(data);
    setSubmiting(true);
    if (formErr === null)
      try {
        const response = await axios({
          method: "post",
          url: "https://inforeposerver.onrender.com/addFormTwo",
          data: data,
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
      <form onSubmit={handleFormSubmit}>
        <Header handleHeaderContent={handleHeaderContent} />
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
        <LegalStatus handleLegalContent={handleLegalContent} />
        <PhysicalInfra
          handlePhysicalInfraContent={handlephysicalInfraContent}
        />
        <Management handleManagementContent={handlemanagementContent} />
        <Functionality
          handleFunctionalityContent={handlefunctionalityContent}
        />
        <MultipleComponents handleMultipleContent={handlemultipleContent} />
        <RecordFinancialComponents
          handleRecordFinancialContent={handleRecordFinancialContent}
        />
        <Recomend handleRecomendContent={handleRecommendContent} />

        {/* <Status handleStatusContent={handleStatusContent} />
        <Infrastructure handleInfraContent={handleInfraContent} />
        <Service handleServiceContent={handleServiceContent} />
        <StaffForm handleStaffContent={handlestaffContent} />
        <Committe handleCommitteContent={handleCommitteContent} />
        <RecordMaintenance handleRecordContent={handleRecordContent} />
        <Remarks handleRemarkContent={handleRemarkContent} /> */}
        {/* <Submit data={data} /> */}

        <div className="formSubmitBtn">
          <button type="submit" id="btnsbmit">
            {submiting
              ? "Submiting the  Inspection Report Please Wait!!!"
              : "Submit Inspection Report"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecondForm;
