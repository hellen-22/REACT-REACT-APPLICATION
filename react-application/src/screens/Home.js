import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Buttons from "../components/Buttons";

function Home() {
  const [status, setStatus] = useState("Approve");

  useEffect(() => {
    console.log("Home screen has started")
  },[])

  return (
    <div className="Home">
      <Header />
      <h1>This is Home page</h1>
      <div>
        <p>Click for Approval</p>
        <Buttons text={status}
          onClick={() => {
            setStatus("Approved");
          }}
        >

        </Buttons>
      </div>
    </div>
      
    
  );
}

export default Home;
