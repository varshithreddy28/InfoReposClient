import React, { useState } from "react";
import axios from "axios";
import UserDrop from "../../components/userDrop/userDrop";
import "./login.css";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/userFeature";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import LoadingSpinner from "../../components/LoadingSpinner/loading";

function Signup() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * dispatch(addUser(user))
   * stateAll = useSelector((state) => state);
   */

  const [emailid, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = {
      emailid,
      password,
    };
    setLoading(true);
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
      toast.error(error.message);
    }
    setLoading(false);
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
      <div className="hgdfv">
        <div className="loginfrm">
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
              {loading ? (
                <div className="loadingUser">
                  {/* <div className="loadingtxt">Hang on</div> */}
                  <LoadingSpinner />
                </div>
              ) : (
                <button type="submit" className="loginbtn login2">
                  Login
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
