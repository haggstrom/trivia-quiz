import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

const NextButton = ({ text, onClick, disabled, showLoaderOnClick }) => {
  const [showLoader, setShowLoader] = useState(false);

  const onButtonClick = () => {
    if (showLoaderOnClick || false) {
      setShowLoader(true);
    }
    onClick();
  };

  return (
    <Button
      style={{ marginTop: "10px" }}
      variant="light"
      size="lg"
      onClick={onButtonClick}
      block
      disabled={disabled || false}
    >
      {showLoader ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        text
      )}
    </Button>
  );
};

export default NextButton;
