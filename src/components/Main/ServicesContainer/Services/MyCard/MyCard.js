import React from "react";
import "../Services.css";
import { Card, Col } from "react-bootstrap";

const MyCard = () => {
  return (
    <>
      <Col>
        <Card className="myCard shadow">
          <Card.Img
            variant="top"
            className="w-50 p-2 mx-auto"
            src="https://purepng.com/public/uploads/large/purepng.com-big-househousebuildinghomewood-houseconcrete-house-1701528487135irhd4.png"
          />
          <Card.Body>
            <Card.Title>Explore Universities</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="myCard shadow">
          <Card.Img
            variant="top"
            className="w-50 p-2 mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz-Zh38lxkxyQTeGlCWwTdp4-4xq-mndlpg&usqp=CAU"
          />
          <Card.Body>
            <Card.Title>Free Counselling</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="myCard shadow">
          <Card.Img
            variant="top"
            className="w-50 pt-2 mx-auto"
            src="https://www.pngplay.com/wp-content/uploads/6/Developer-Application-Logo-Transparent-PNG.png"
          />
          <Card.Body>
            <Card.Title>Applications Manager</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="myCard shadow">
          <Card.Img
            variant="top"
            className="w-50 p-2 mx-auto"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admission-test-2905621-2414414.png"
          />
          <Card.Body>
            <Card.Title>Admissions Tests</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MyCard;
