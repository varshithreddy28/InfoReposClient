import React, { useState } from "react";
import axios from "axios";
import UserDrop from "../../components/userDrop/userDrop";
import "./login.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userFeature";

function Signup() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  /**
   * dispatch(addUser(user))
   * stateAll = useSelector((state) => state);
   */

  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      emailid,
      password,
    };
    try {
      const response = await axios.post(
        "https://inforeposerver.onrender.com/login",
        { ...userDetails },
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 201) {
        toast.success("Successfully Registred");
        navigate("/");
        const user = response.data.foundUser;
        dispatch(addUser(user));
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

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
        <h2 className="userauthlog">Login</h2>

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
        </div>
        <div className="userSub">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
