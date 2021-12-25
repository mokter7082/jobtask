import React from "react";
import "./MyNav.css";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const MyNav = () => {
  return (
    <>
      <Navbar
        className="myNav"
        collapseOnSelect
        expand="lg"
        style={{ background: "#F1F5FD" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.ibb.co/Xkf09QL/Capture.jpg"
              width="130"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features">Study Abroad</Nav.Link>
              <Nav.Link href="#pricing">Exam Prep</Nav.Link>
              <Nav.Link href="#features">Documents</Nav.Link>
              <Nav.Link href="#pricing">Discussions</Nav.Link>
              <Nav.Link href="#pricing">Counsellors</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing">
                <input placeholder="Search" className="w-75" type="search" />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <i class="far mt-2 fs-4 fa-heart"></i>
              </Nav.Link>
              <Nav.Link>
                <i class="fas mt-2 fs-4 fa-strikethrough"></i>
              </Nav.Link>
              <Nav.Link>
                <button className="signIn">Sign In</button>
              </Nav.Link>
              <Nav.Link>
                <button className="profileButton" variant="warning">
                  Profile Evaluation
                </button>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNav;
