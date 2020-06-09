import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const TextPanel = ({ header, text, metaText }) => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Card.Title>{header}</Card.Title>
            <Card.Text>{text}</Card.Text>
            {metaText && (
              <Card.Text>
                <small className="text-muted">Kategori: {metaText}</small>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TextPanel;
