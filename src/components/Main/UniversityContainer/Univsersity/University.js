import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const University = () => {
  return (
    <>
      <Col md={8} className="mx-auto" style={{ marginTop: "50px" }}>
        <Row xs={3} md={6} className="g-4">
          {Array.from({ length: 18 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/f754/35b2/7dc7f281a8f8bb2ecef0685bb69b2d7a?Expires=1641168000&Signature=fjX14d7i4Uev1NGmqFEHkfUzg1JUIBxsaMvpVkDwHLGOTprnzSC1~PYS8bcD63FA0LSt8qK~Do5SCBfESEpCs2aNU1ynCbrAgH7pEZqM1108fq3rg1PUKk6OEpAkIScFymhJF6krYhPd4dA3Rf5sV2QRCurekar6Sol5Nc114PaQr2-6bLxN8vtMOECJ9EbuERZctAz73O7d9FS41yOCn0Eyp-pcHC7q2UGn3K9O1jzFMYMfAOxLzEc4R80u9ECzia3wmhV6suenv9fDIIFNqi8U2veZ9ksFfyIbnCpa08WU08R~Rw5oKZ5e-6O24Ut9H4iHrenX80KOKrxqi7yF-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
};

export default University;
