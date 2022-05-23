import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Header from "../components/Header";

function Home() {
  const [status, setStatus] = useState("Approve");

  useEffect(() => {
    console.log("Home screen has started")
  })

  return (
    <div className="Home">
      <Header />
      <h1>This is Home page</h1>
      <div>
        <p>Click for Approval</p>
        <Button
          onClick={() => {
            setStatus("Approved");
          }}
        >
          {status}
        </Button>
      </div>
    </div>
      
    
  );
}

export default Home;
