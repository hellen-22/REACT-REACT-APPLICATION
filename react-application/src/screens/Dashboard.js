import React from "react";
import "./../css/style.css";

import Header from "../components/Header";
import Subscriptions from "../components/Subscriptions";
import Card from "../components/Cards";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Card  />
      <Subscriptions />
    </div>
  );
}

export default Dashboard;
