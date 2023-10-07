import React, { useState, useEffect } from "react";
import "./nameform.css";
import { GrAdd } from "react-icons/gr";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";
// import DatePickerComp from "../Date/date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Table from "react-bootstrap/Table";

function StaffFormDynamic({ title, handleAddNames }) {
  const [details, setDetails] = useState([]);
  const [newDetail, setNewDetail] = useState({
    name: "",
    designation: "",
    joiningDate: "",
    attendance: "",
    remarks: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [editDetail, setEditDetail] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChangeComp = (date) => {
    setSelectedDate(date);
  };

  const handleAdd = () => {
    console.log(newDetail);
    if (
      newDetail.name.trim() !== "" &&
      newDetail.designation.trim() !== "" &&
      // newDetail.joiningDate.toString().trim() > 1 &&
      newDetail.attendance.trim() !== ""
    ) {
      setDetails([...details, newDetail]);
      setNewDetail({
        name: "",
        designation: "",
        joiningDate: new Date(),
        attendance: "",
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
    handleAddNames(details);
  }, [details]);

  const inputsArr = [
    {
      id: "nameText",
      value: "name",
      placeholder: "Enter a name",
      label: "Name",
      type: "text",
    },
    {
      id: "designation",
      value: "designation",
      placeholder: "Enter Designation",
      label: "Designation",
      type: "text",
    },
    {
      id: "joiningDate",
      value: "joiningDate",
      placeholder: "Enter joiningDate",
      label: "Joining Date",
      type: "date",
    },
    {
      id: "attendance",
      value: "attendance",
      placeholder: "Enter Attendance at the time of visit",
      label: "Attendance at the time of visit",
      type: "text",
    },
    {
      id: "remarks",
      value: "remarks",
      placeholder: "Remarks if any",
      label: "Remarks",
      type: "text",
    },
  ];

  const handleInputChange = (value, key) => {
    setNewDetail({ ...newDetail, [key]: value });
  };

  useEffect(() => {
    if (selectedDate)
      handleInputChange(selectedDate.toDateString(), "joiningDate");
  }, [selectedDate]);

  const tableHeaderCP = [
    "Name",
    "Designation",
    "Date of Joining",
    "Attendance at the time of visit",
    "Remarks",
    "Delete Employee Details",
  ];

  const creopls = [
    {
      name: "PTC Control Center",
      available: [true, true, true, false, false],
    },
    {
      name: "Real-Time Collaboration with Creo+",
      available: [true, true, true, false, false],
    },
  ];

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
              <th>Name</th>
              <th>Designation</th>
              <th>Date of Joining</th>
              <th>Attendance</th>
              <th>Remarks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {details.map((employee, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
                <td>{employee.joiningDate}</td>
                <td>{employee.attendance}</td>
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

export default StaffFormDynamic;
