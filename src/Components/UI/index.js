import React from "react";
import { Form } from "react-bootstrap";

function Input(props) {
  return (
    <Form.Group>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
}

export default Input;
