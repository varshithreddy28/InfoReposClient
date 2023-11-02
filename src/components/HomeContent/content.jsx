import React, { useState, useEffect } from "react";
import { SiReacthookform } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";
import { MdNewspaper } from "react-icons/md";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./content.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import New from "../Whatsnew/new";

export default function Content() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [newcntVal, setnewcntVal] = useState();
  // const [userDetails, setUserDetails] = useState(null)

  const stateAll = useSelector((state) => state);

  const formDetails = [
    {
      name: "Form for Inspections(Form 46)",
      url: "/firstform",
    },
    {
      name: "Inspection for Registration & Renewal (Form 46A)",
      url: "secondform",
    },
  ];

  const userDetails = [
    {
      name: "New User Registration",
      url: "/signup",
    },
    {
      name: "Existing User",
      url: "/login",
    },
  ];

  const wtsnewHeaders = [
    {
      title: "Section 54",
      value: "sec54",
    },
    {
      title: "41. Inspection",
      value: "inspec41",
    },
  ];

  useEffect(() => {
    if (stateAll.userSlice.user.name !== undefined) setLoggedIn(true);
  }, [stateAll.userSlice.user.name]);

  const handleNewCnt = (value) => {
    setnewcntVal(value);
  };

  return (
    <div className="container">
      <div className="homecontent">
        <div className="fillDetails">
          {stateAll.userSlice.user.name === undefined ? (
            <div className="fillHeader">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <FaUserAlt />
                    <span className="detailsfill">Users</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {userDetails.map((detail) => {
                        return (
                          <>
                            <ListGroup.Item>
                              <Link to={detail.url}>
                                <button className="service_btn">
                                  {detail.name}
                                </button>
                              </Link>
                            </ListGroup.Item>
                          </>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <MdNewspaper />
                    <span className="detailsfill">What's New</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {wtsnewHeaders.map((detail) => {
                        return (
                          <>
                            <ListGroup.Item>
                              <button
                                className="service_btn"
                                onClick={() => handleNewCnt(detail.value)}
                              >
                                {detail.title}
                              </button>
                            </ListGroup.Item>
                          </>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          ) : (
            <div className="fillHeader">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <SiReacthookform />
                    <span className="detailsfill">Fill the Details</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {formDetails.map((detail) => {
                        return (
                          <>
                            <ListGroup.Item>
                              <Link to={detail.url}>
                                <button className="service_btn">
                                  {detail.name}
                                </button>
                              </Link>
                            </ListGroup.Item>
                          </>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
                {/* Again */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    <MdNewspaper />
                    <span className="detailsfill">What's New</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      {wtsnewHeaders.map((detail) => {
                        return (
                          <>
                            <ListGroup.Item>
                              <button
                                className="service_btn"
                                onClick={() => handleNewCnt(detail.value)}
                              >
                                {detail.title}
                              </button>
                            </ListGroup.Item>
                          </>
                        );
                      })}
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          )}
        </div>
        <div className="whatsnew">
          <New value={newcntVal} />
        </div>
      </div>
    </div>
  );
}
