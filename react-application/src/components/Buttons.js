import React  from 'react';
import { Button } from "react-bootstrap";

function Buttons({ text, onClick }) {
  return (
    <Button style={{ backgroundColor: "black", border:"None" }} onClick={onClick} >
      {text}
    </Button>
  )
}

Buttons.defaultProps = {
  text : "Button",
}

export default Buttons;
