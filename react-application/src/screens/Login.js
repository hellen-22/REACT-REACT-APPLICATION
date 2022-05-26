import React from "react";
import { Link } from "react-router-dom"
import { Form, Button, Col} from "react-bootstrap";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

function Login() {
  return (
    <div>
      <Header />
      <Form>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
        </Col>
        <Col>
          <Buttons text="LogIn" />
        </Col>
        <Col>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        </Col>
      </Form>
    </div>
  );
}

export default Login;
