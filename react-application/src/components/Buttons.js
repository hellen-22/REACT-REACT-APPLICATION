import React from 'react';
import { Button } from "react-bootstrap";

function Buttons({ text }) {
  return (
    <Button style={{ backgroundColor: "black", border:"None" }}>
      {text}
    </Button>
  )
}

Buttons.defaultProps = {
  text : "Button"
}

export default Buttons;
