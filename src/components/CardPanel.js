import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
const CardPanel = ({ children }) => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>{children}</Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardPanel;
