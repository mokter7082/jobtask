import React from "react";
import "./Cover.css";
import img1 from "../../../../images/Capture.JPG";
import { Col, Container, Row } from "react-bootstrap";

const Cover = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="col-md-8 my-4 mx-auto text-center">
            <ul>
              <li className="university">University</li>
              <li>Who We Are</li>
              <li>Student’s</li>
            </ul>
          </Col>
          <Col className="col-md-8 main mt-4 mx-auto">
            <Col md={12}>
              <Row>
                <Col md={6}>
                  <span className="fs-1">
                    Aliquam lorem eget <br /> netus{" "}
                    <span style={{ fontWeight: "bold" }}>mauris</span>.
                  </span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                    elit. Malesuada erat suspendisse <br /> senectus erat
                    vulputate ut nunc. Lorem <br /> aliquet leo, natoque
                    vulputate. Massa est <br /> vitae ridiculus dapibus viverra
                    et semper proin pulvinar.
                  </p>
                </Col>
                <Col md={6}>
                  <Col md={8} className="mx-auto mt-4">
                    <div class="one mt-4">
                      <img
                        className="w-100"
                        src="https://s3-alpha-sig.figma.com/img/832a/203f/b59b6f2467a748517faa715d7d4918e2?Expires=1641168000&Signature=gAWXeV3--hN9e3cn9~msOfQZ~fzuc91TEvbKHoYM4a6V9CTMa05TRJcVHtDPmQpxwIRw9hJPQAl5piCyBqVmCnoQSx1Vg37j7otd3lKVuL11C~MkOI5gKHSFnkW4CriN2aitOUrVd2FoFEBN1jCvXCi2U6YoVQZDmB64S4xx-xfeIJDP8aVpSRzWpHfZ6omya2GqJX0O7gZ8gxkPxWCsx3hZyuspUmnlKa71XTqI2F0w0OaF0vj1TMHpHuXvJKV78nHjARCoD~BJyg67vz1QPfr0pW28Ow5Sj~Z0gCDih2HLykeRoTn0VdH2SOW10AhBeHy5llOz8lSvkz~2qhauIg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                        alt=""
                      />
                    </div>
                    <div class="two mt-4">
                      <img className="w-100" src={img1} alt="" />
                    </div>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cover;
