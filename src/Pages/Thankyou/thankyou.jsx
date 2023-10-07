import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const ThankYouPage = () => {
  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col md={6}>
            <div className="text-center">
              <h1 className="display-4">Thank You!</h1>
              <p className="lead">
                All your data has been stored successfully.
              </p>
              <p>You can now close the browser.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYouPage;
