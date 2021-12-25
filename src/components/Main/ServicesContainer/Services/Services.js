import React from "react";
import "./Services.css";
import bannerImg from "../../../../images/bannerbg.png";
import { Card, Col, Container, Row } from "react-bootstrap";
import MyCard from "./MyCard/MyCard";

const Services = () => {
  return (
    <>
      <Col md={8} className="mx-auto">
        <Row className="rowContainer">
          <Col md={6} className="mt-4">
            <span className="studyTitle">
              The Comprehensive <br /> Toolkit for Every Stage <br /> of{" "}
              <span className="bold">Study Abroad</span>
            </span>
            <br />
            <small>
              Bringing international student experience and intelligent
              technology <br /> together to make study abroad solutions simpler
              than ever
            </small>
          </Col>
          <Col md={6} className="rightServices">
            <img className="rightImg" src={bannerImg} alt="" />
          </Col>
        </Row>
        {/* NEXT ROW */}
        <div class="">
          <Row>
            <Col className="courseContainer" md={8}>
              <Row>
                <Col md={6} className="">
                  <input
                    className="w-100 courseInput"
                    placeholder="Enter Course, University or Exam"
                    type="text"
                  />
                </Col>
                <Col md={6} className="mt-1">
                  <Row>
                    <select name="" className="form-control w-50" id="">
                      <option value="">--Select--</option>
                      <option value="">s</option>
                      <option value="">s</option>
                    </select>
                    <i
                      class="fas bg-dark rounded pt-1 ms-1 text-white fs-2 ps-4 fa-list-ul"
                      style={{ width: "80px" }}
                    ></i>
                    <i
                      class="fas rounded text-white fs-2 ps-2 pt-2 ms-4 fa-search"
                      style={{ width: "50px", background: "#f47f20" }}
                    ></i>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={12} sm={12} className="mt-3">
                  <Row>
                    <Col md={4} sm={4}>
                      <select name="" className="form-control" id="">
                        <option value="">Location</option>
                        <option value="">s</option>
                        <option value="">s</option>
                      </select>
                    </Col>
                    <Col md={4} sm={4}>
                      <select name="" className="form-control " id="">
                        <option value="">Location</option>
                        <option value="">s</option>
                        <option value="">s</option>
                      </select>
                    </Col>
                    <Col md={4} sm={4}>
                      <select name="" className="form-control" id="">
                        <option value="">Location</option>
                        <option value="">s</option>
                        <option value="">s</option>
                      </select>
                    </Col>
                  </Row>
                </Col>
                {/* next */}
                <Col md={12} sm={12} className="mt-3">
                  <Row>
                    <Col md={6} sm={4}>
                      <span>Fess & Expencess</span>
                      <div className="bdr mt-3"></div>
                      <div class="d-flex justify-content-between">
                        <div class="">$300</div>
                        <div class="">$600</div>
                      </div>
                    </Col>
                    <Col md={6} sm={4}>
                      <span>Fess & Expencess</span>
                      <div className="bdr mt-3"></div>
                      <div class="d-flex justify-content-between">
                        <div class="">$300</div>
                        <div class="">$600</div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                {/* next */}
                <Col md={12} sm={12} className="mt-3 userArea">
                  <Row xs={2} md={4} className="g-4">
                    <MyCard />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="rightContainer">
              <Row xs={2} md={2} className="g-4">
                <Col>
                  <Card className="border-0 rounded shadow rightCard">
                    <Card.Img
                      variant="top"
                      className="w-50 mx-auto p-2"
                      src="https://w7.pngwing.com/pngs/784/228/png-transparent-computer-icons-multi-user-software-user-profile-others-text-people-logo.png"
                    />
                    <Card.Body>
                      <Card.Title>Discussion</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card className="border-0 rounded shadow rightCard">
                    <Card.Img
                      variant="top"
                      className="w-50 mx-auto p-2"
                      src="https://w7.pngwing.com/pngs/784/228/png-transparent-computer-icons-multi-user-software-user-profile-others-text-people-logo.png"
                    />
                    <Card.Body>
                      <Card.Title>Events</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </>
  );
};

export default Services;
