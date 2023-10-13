import React, { useState, useEffect } from "react";
import { SiReacthookform } from "react-icons/si";
import { FaUserAlt } from "react-icons/fa";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./content.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Content() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [userDetails, setUserDetails] = useState(null)

  const stateAll = useSelector((state) => state);

  const formDetails = [
    {
      name: "Form 46",
      url: "/firstform",
    },
    {
      name: "Form 46A",
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

  useEffect(() => {
    if (stateAll.userSlice.user.name !== undefined) setLoggedIn(true);
  }, [stateAll.userSlice.user.name]);

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
              </Accordion>
            </div>
          )}
        </div>
        <div className="whatsnew">Whats New</div>
      </div>
    </div>
  );
}
