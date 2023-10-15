import React, { useState } from "react";
import axios from "axios";
import UserDrop from "../../components/userDrop/userDrop";
import "./signup.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userFeature";
import { useCookies } from "react-cookie";
import LoadingSpinner from "../../components/LoadingSpinner/loading";

function Signup() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * dispatch(addUser(user))
   * stateAll = useSelector((state) => state);
   */

  const [name, setName] = useState("");
  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobilenumber, setPhoneNo] = useState("");
  const [confirmPassword, setpasswordConfirm] = useState("");
  const [district, setdistrictUser] = useState("");
  const [designation, setDesignation] = useState("");
  const [placeofwork, setplaceWork] = useState("");
  const [cookies, setCookie] = useCookies([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetails = {
        name,
        emailid,
        password,
        mobilenumber,
        confirmPassword,
        designation,
        district,
        placeofwork,
      };
      setLoading(true);

      const response = await axios.post(
        "https://inforeposerver.onrender.com/signup",
        userDetails,
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Successfully Registred");
        navigate("/");
        const user = response.data.savedUser;
        const token = response.data.token;

        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        console.log(expirationDate);

        setCookie("tokenuser", token, {
          path: "/",
          expires: expirationDate,
        });

        dispatch(addUser(user));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  const districts = [
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
  ];

  const designationList = [
    "Anganwadi Worker",
    "Anganwadi Supervisor",
    "CDPO",
    "DCPO",
    "PO-IC",
    "PO-NIC",
    "LPO",
    "Counselor - DCPO",
    "SAA - Manager",
    "Social Workers",
    "Home Superintendent/NGO",
    "DPO",
    "Case Worker",
    "DWO",
    "Sakhi Legal Officer",
    "Sakhi Counselor",
    "Police-SHO/ASP/DSP",
    "CWC-Chairperson/Members",
    "JJB - Members",
    "Childline Staff",
    "NGO - Manager",
    "SCPU - PM/PO",
    "Administrator",
  ];

  return (
    <div className="container">
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
      <form onSubmit={handleSubmit} className="userdetailsForm">
        <h2 className="userauthlog">Signup</h2>

        <div className="signgrp">
          <div className="form-group">
            <label htmlFor="nameuser" className="nameFormHeader">
              Enter User Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={name}
              id="nameuser"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phno" className="nameFormHeader">
              Enter Phone Number
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Phone Number"
              value={mobilenumber}
              id="phno"
              required
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </div>
        </div>
        <div className="signgrp">
          <div className="form-group">
            <label htmlFor="pass" className="nameFormHeader">
              Enter Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              id="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="conpass" className="nameFormHeader">
              Confirm Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              id="conpass"
              onChange={(e) => setpasswordConfirm(e.target.value)}
            />
          </div>
        </div>

        <div className="signgrp">
          <div className="form-group">
            <UserDrop
              dropvalues={districts}
              value={"Select District"}
              updateDropDetails={setdistrictUser}
            />
          </div>
          <div className="form-group">
            <UserDrop
              dropvalues={designationList}
              value={"Select your Designation"}
              updateDropDetails={setDesignation}
            />
          </div>
        </div>

        <div className="signgrp">
          <div className="form-group">
            <label htmlFor="email" className="nameFormHeader">
              Enter the Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              id="email"
              required
              value={emailid}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="place" className="nameFormHeader">
              Place of Work
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Place of Work"
              value={placeofwork}
              id="place"
              onChange={(e) => setplaceWork(e.target.value)}
            />
          </div>
        </div>
        <div className="userSub">
          {loading ? (
            <div className="loadingUser">
              {/* <div className="loadingtxt">Hang on</div> */}
              <LoadingSpinner />
            </div>
          ) : (
            <button type="submit" className="loginbtn">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signup;
