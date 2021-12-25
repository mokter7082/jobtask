import React from "react";
import "./Access.css";
import { Card, Col, Row } from "react-bootstrap";

const Access = () => {
  return (
    <>
      <Col md={8} className="mx-auto my-4">
        <Row>
          <Col md={6}>
            <Row xs={2} md={2} className="g-4">
              <Col>
                <Card className="shadow text-center border-0 accessCard">
                  <Card.Body>
                    <h2>4985</h2>
                    <Card.Title style={{ color: "gray" }}>
                      Student <br /> Communities
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow text-center border-0 accessCard">
                  <Card.Body>
                    <h2>200+</h2>
                    <Card.Title style={{ color: "gray" }}>
                      Study Abroad Countries
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow text-center border-0 accessCard">
                  <Card.Body>
                    <h2>6000+</h2>
                    <Card.Title style={{ color: "gray" }}>
                      Colleges, Universities & Institutes
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="shadow text-center border-0 accessCard">
                  <Card.Body>
                    <h2>2350+</h2>
                    <Card.Title style={{ color: "gray" }}>
                      Programs <br /> of Study
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Col md={8} className="mx-auto">
              <span className="fs-2">
                UniSearch is Your <br />{" "}
                <span style={{ fontWeight: "bold" }}>Complete Access</span>{" "}
                Point to
              </span>
              <p style={{ color: "gray" }}>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
                Malesuada erat suspendisse senectus erat vulputate ut nunc.
                Lorem <br /> aliquet leo, natoque vulputate. Massa est <br />{" "}
                vitae ridiculus dapibus viverra et semper <br /> proin pulvinar.
              </p>
            </Col>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Access;
