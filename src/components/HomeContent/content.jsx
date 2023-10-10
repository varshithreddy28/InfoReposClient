import React from "react";
import { SiReacthookform } from "react-icons/si";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import "./content.css";
import { Link } from "react-router-dom";

export default function Content() {
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

  return (
    <div>
      <div className="homecontent">
        <div className="fillDetails">
          <div className="fillHeader">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <SiReacthookform /> Fill the Details
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
        </div>
        <div className="whatsnew">Whats New</div>
        <div className="additionalCnt">New User Registration</div>
      </div>
    </div>
  );
}
