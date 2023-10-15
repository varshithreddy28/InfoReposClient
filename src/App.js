import "./App.css";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import FirstForm from "./components/FirstForm/FirstForm";
import ThankYouPage from "./Pages/Thankyou/thankyou";
import Nav from "./components/NavBar/nav";
import Bottomnav from "./components/BottomNav/bottomnav";
import SecondForm from "./Pages/SecondForm/secondform";
import SecondNav from "./components/SecondNav/nav";
import Home from "./Pages/Home/home";
import ScrollToTop from "./components/ScrolltoTop/ScrolltoTop";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/userFeature";
import Signup from "./Pages/Signup/signup";
import Login from "./Pages/Login/Login";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function App() {
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies([]);
  /**
   * dispatch(addUser(user))
   * stateAll = useSelector((state) => state);
   */

  const stateAll = useSelector((state) => state);

  const handleFormSuccess = () => {
    console.log("Form Submitted SuccessFully");
  };

  useEffect(() => {
    if (!cookies.tokenuser) {
      dispatch(addUser(undefined));
    }
    try {
      const verifyCookie = async () => {
        const tokenCookie = cookies.tokenuser;
        console.log("Token Cookie");
        console.log(tokenCookie);
        if (tokenCookie)
          if (tokenCookie == "undefined") {
            console.log("jgfhfkgtug");
            return 0;
          } else {
            console.log("Runninnnnnngg");
            const response = await axios.post(
              "https://inforeposerver.onrender.com/validate",
              // "http://localhost:3000/validate",
              {},
              {
                withCredentials: true,
                headers: {
                  Cookie: tokenCookie,
                },
              }
            );
            if (response.data.success == true && response.status == 200) {
              dispatch(addUser(response.data.foundUser));
            } else if (
              response.data.success == false &&
              response.status == 401
            ) {
              console.log("User validation Failed");
            }
          }
      };
      verifyCookie();
    } catch (error) {
      console.log("User Validation Failed");
    }
  }, [cookies]);

  return (
    <div>
      <Router>
        <SecondNav />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          {stateAll.userSlice.user.name === undefined ? null : (
            <>
              <Route
                path="firstform"
                element={<FirstForm handleFormSuccess={handleFormSuccess} />}
              />
              <Route path="secondform" element={<SecondForm />} />
            </>
          )}

          <Route path="thankyou" element={<ThankYouPage />} />

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route path="secondform/thankyou" element={<ThankYouPage />} />
        </Routes>
        {/* <Nav /> */}
        <Bottomnav />
      </Router>
    </div>
  );
}

export default App;
