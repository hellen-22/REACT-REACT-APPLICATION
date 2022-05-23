import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./../css/style.css";
import img from "./../images/logo512.png";
import Header from "../components/Header";
import Subscriptions from "./Subscriptions";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Row style={{ padding: "10px", margin:"10px" }}>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Daily</Card.Title>
              <Card.Text>Subscribe to our daily charges</Card.Text>
              <Button variant="primary">Pay Subscription</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Monthly</Card.Title>
              <Card.Text>Subscribe to our monthly charges</Card.Text>
              <Button variant="primary">Pay Subscription</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>Yearly</Card.Title>
              <Card.Text>Subscribe to our Yearly charges</Card.Text>
              <Button variant="primary">Pay Subscription</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      < Subscriptions />
    </div>
  );
}

export default Dashboard;
