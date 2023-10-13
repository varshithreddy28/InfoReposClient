import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./nav.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../features/userFeature";
import { useCookies } from "react-cookie";

export default function SecondNav() {
  let navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false);

  const stateAll = useSelector((state) => state);

  useEffect(() => {
    console.log(stateAll.userSlice.user.name);
    if (stateAll.userSlice.user.name !== undefined) setLoggedIn(true);
  }, []);

  const handleLogOut = () => {
    dispatch(deleteUser());
    removeCookie("token");
    navigate("/");
  };

  const handleAuth = (path) => {
    navigate(path);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Navbar.Brand>
        <div className="showlg">
          <Link to={"/"}>
            Department of Women Children Senior Citizen and Disabled
          </Link>
        </div>
        <div className="showsm">
          <Link to={"/"}>DWCSCPD</Link>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          {stateAll.userSlice.user.name !== undefined ? (
            <Nav.Link onClick={handleLogOut}>Log Out</Nav.Link>
          ) : (
            <>
              <Nav.Link onClick={() => handleAuth("/signup")}>Signup</Nav.Link>
              <Nav.Link onClick={() => handleAuth("/login")}>Login</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
