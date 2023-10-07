import React, { useState, useEffect } from "react";
import "./nameform.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
// import DatePickerComp from "../Date/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";

function RecordDynamic({ title, handleCommitteeDetails }) {
  const [details, setDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({
    committeeMemberName: "",
    placeVisit: "",
    inspectionDate: "",
    employeeId: "",
    remarks: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editDetail, setEditDetail] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChangeComp = (date) => {
    setSelectedDate(date);
  };

  const handleAdd = () => {
    // console.log(newDetail);
    if (
      newDetail.committeeMemberName.trim() !== "" &&
      newDetail.placeVisit.trim() !== "" &&
      // newDetail.joiningDate.toString().trim() > 1 &&
      newDetail.employeeId.trim() !== ""
    ) {
      setDetails([...details, newDetail]);
      setNewDetail({
        committeeMemberName: "",
        placeVisit: "",
        inspectionDate: new Date(),
        employeeId: "",
        remarks: "",
      });
      // Matching the date with existing date
      setSelectedDate(new Date());
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditDetail(details[index]);
  };

  const handleDelete = (index) => {
    const updatedDetails = [...details];
    updatedDetails.splice(index, 1);
    setDetails(updatedDetails);
  };

  const handleEditDetail = () => {
    if (editDetail.name.trim() !== "") {
      if (editIndex !== null) {
        const updatedDetails = [...details];
        updatedDetails[editIndex] = editDetail;
        setDetails(updatedDetails);
        setEditIndex(null);
        setEditDetail({});
      }
    }
  };

  useEffect(() => {
    console.log(details);
    handleCommitteeDetails(details);
  }, [details]);

  const inputsArr = [
    {
      id: " committeeMemberName",
      value: "committeeMemberName",
      placeholder: "Enter the  Committee Member Name",
      label: "Name of the Committee Member",
      type: "text",
    },
    {
      id: "placeVisit",
      value: "placeVisit",
      placeholder: "Enter Place of Visit",
      label: "Enter the Place of the Visit",
      type: "text",
    },
    {
      id: "inspectionDate",
      value: "inspectionDate",
      placeholder: "Enter Inspection Date",
      label: "Enter Date of the Inspection",
      type: "date",
    },
    {
      id: "employeeId",
      value: "employeeId",
      placeholder: "Enter ID of the Employee",
      label: "Employee ID of the Committee Member",
      type: "text",
    },
    {
      id: "remarks",
      value: "remarks",
      placeholder: "Enter the Remarks",
      label: "Remarks",
      type: "text",
    },
  ];

  const handleInputChange = (value, key) => {
    setNewDetail({ ...newDetail, [key]: value });
  };

  useEffect(() => {
    if (selectedDate)
      handleInputChange(selectedDate.toDateString(), "inspectionDate");
  }, [selectedDate]);

  return (
    <div>
      <div className="nameform">
        <div className="nameFormInp staffInp">
          {inputsArr.map((input) => {
            return (
              <>
                {input.type === "text" ? (
                  <div className="staffInpDetails">
                    <label htmlFor={input.id} className="nameFormHeader">
                      {input.label}
                    </label>
                    <div className="nameformEle">
                      <input
                        className="form-control"
                        id={input.id}
                        type="text"
                        placeholder={input.placeholder}
                        value={newDetail[input.value]}
                        onChange={(e) =>
                          handleInputChange(e.target.value, input.value)
                        }
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* <DatePickerComp
                      label={input.label}
                      name={input.value}
                      updateDetails={handleInputChange}
                    /> */}
                    <div className="staffInpDetails">
                      <label htmlFor={input.id} className="nameFormHeader">
                        {input.label}
                      </label>
                      <div className="nameformEle">
                        <DatePicker
                          selected={selectedDate}
                          onChange={handleDateChangeComp}
                          dateFormat="MM/dd/yyyy"
                        />
                      </div>
                    </div>
                  </>
                )}
              </>
            );
          })}
          <div className="addBtnStaff">
            <button
              className="nameAdd addBtnStaff"
              type="button"
              onClick={handleAdd}
            >
              <span>Add Details</span>
              {/* <GrAdd /> */}
            </button>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Committee Member</th>
              <th>Place of Visit</th>
              <th>Date of Inspection</th>
              <th>Employee Id</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((employee, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{employee.committeeMemberName}</td>
                <td>{employee.placeVisit}</td>
                <td>{employee.inspectionDate}</td>
                <td>{employee.employeeId}</td>
                <td>{employee.remarks}</td>
                <td>
                  <button
                    className="nameAdd staffDetailsDel"
                    onClick={() => handleDelete(index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecordDynamic;
