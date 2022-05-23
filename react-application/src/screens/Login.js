import React from "react";
import { Form, Button, Col} from "react-bootstrap";
import Header from "../components/Header";

function Login() {
  return (
    <div>
      <Header />
      <Form>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            LogIn
          </Button>
        </Col>
      </Form>
    </div>
  );
}

export default Login;