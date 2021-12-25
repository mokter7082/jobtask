import React from "react";
import "./Top.css";
import { Col, Container, Row } from "react-bootstrap";

const Top = () => {
  return (
    <>
      <div class="top">
        <Container>
          <Row className="pt-3">
            <Col md={4}>
              <span className="pe-2">
                <i class="fas fs-5 topIcon fa-phone-alt"></i>
              </span>
              <span className="me-2">+61 02 8628 0911</span>|
              <span className="ps-2 pe-2 px-2">
                <i class="fas fs-5 topIcon fa-envelope"></i>
              </span>
              <span>info@unisearch.my</span>
            </Col>
            <Col md={5}>
              <ul>
                <li>Study</li>
                <li>Online Learning</li>
                <li>Accommodation</li>
                <li>Jobs</li>
              </ul>
            </Col>
            <Col md={3} style={{ textAlign: "right" }}>
              <span className="px-2">
                <a href="">
                  <i class="fas fs-5 fa-envelope"></i>
                </a>
              </span>
              <span className="px-2">
                <a href="">
                  <i class="fab fs-5 fa-twitter"></i>
                </a>
              </span>
              <span className="px-2">
                <a href="">
                  <i class="fab fs-5 fa-facebook-square"></i>
                </a>
              </span>
              <span className="px-2">
                <a href="">
                  <i class="fab fs-5 fa-youtube"></i>
                </a>
              </span>
              <span className="px-2">
                <a href="">
                  <i class="fab fs-5 fa-instagram"></i>
                </a>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Top;
