import React from "react";
import Form from "react-bootstrap/Form";

const FormSelect = ({ id, label, onChange, defaultValue, options }) => {
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" onChange={onChange} defaultValue={defaultValue}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </Form.Control>
    </Form.Group>
  );
};
export default FormSelect;
