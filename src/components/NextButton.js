import React from "react";
import Button from "react-bootstrap/Button";

const NextButton = ({ text, onClick, disabled }) => {
  return (
    <Button
      style={{ marginTop: "10px" }}
      variant="info"
      size="lg"
      onClick={onClick}
      block
      disabled={disabled || false}
    >
      {text}
    </Button>
  );
};

export default NextButton;
