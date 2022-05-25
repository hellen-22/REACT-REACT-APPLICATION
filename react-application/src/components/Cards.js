import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import img from "./../images/logo512.png";
import Buttons from "./Buttons";

function Cards() {
  const [cards, setCard] = useState([
    {
      id: 1,
      image: img,
      title: "Daily",
      text: "Subscribe to our Daily Charges",
      button: "Pay Subscription",
    },
    {
      id: 2,
      image: img,
      title: "Monthly",
      text: "Subscribe to our Monthly Charges",
      button: "Pay Subscription",
    },
    {
      id: 3,
      image: img,
      title: "Yearly",
      text: "Subscribe to our Yearly Charges",
      button: "Pay Subscription",
    },
  ]);
  return (
    <Row>
      <Col xs={4}>
        {cards.map((card) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Buttons text="Pay Subscription"/>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  );
}

export default Cards;
