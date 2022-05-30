import React from "react";
import "./../css/style.css";

import Header from "../components/Header";
import Card from "../components/Cards";
import Condition from "../components/Condition";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Card  />
      <Condition />
    </div>
  );
}

export default Dashboard;
