import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons";

function About() {
  const [follow, setFollow] = useState("Follow");

  useEffect(() => {
    console.log("About screen has started");
  }, []);

  return (
    <div>
      <Header />
      <h1>This is About page</h1>
      <div>
        <Link to="/home" className="nav-link">
          <Buttons text="Go to Home Page" />
        </Link>
      </div>
      <div>
        <p>
          Hellen follows you. Click <b>Follow</b> to follow back
        </p>
        <Button
          onClick={() => {
            setFollow("Following");
          }}
          >{follow}</Button>
      </div>
    </div>
  );
}

export default About;
