import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Answer = ({ answer, isSelected, onClick }) => {
  return (
    <Col xs={12}>
      <Button
        className={isSelected ? "active" : ""}
        style={{ marginTop: "10px" }}
        variant={isSelected ? "outline-light" : "outline-light"}
        size="lg"
        onClick={onClick}
        block
      >
        {answer}
      </Button>
    </Col>
  );
};

export default Answer;
