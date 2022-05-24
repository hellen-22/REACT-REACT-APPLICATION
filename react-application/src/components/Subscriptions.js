import React, { useState } from "react";
import { Table } from "react-bootstrap";

function Subscriptions() {
  const [subscriptions, setSubscription] = useState([
    {
      id : 1,
      first_name : "Hellen",
      last_name : "Wainaina",
      subscription : "Monthly",
    },
    {
      id : 2,
      first_name : "Gustone",
      last_name : "Alwanga",
      subscription : "Yearly",
    },
    {
      id : 3,
      first_name : "Wambui",
      last_name : "Wanjiru",
      subscription : "Daily",
    },
    {
      id : 4,
      first_name : "Naomi",
      last_name : "Brenda",
      subscription : "Monthly",
    },
    {
      id : 5,
      first_name : "Nelly",
      last_name : "Brenda",
      subscription : "Yearly",
    },
  ])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Subscription</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((subscription) => (
            <tr key={subscription.id}>
            <td>{subscription.id}</td>
            <td>{subscription.first_name}</td>
            <td>{subscription.last_name}</td>
            <td>{subscription.subscription}</td>
          </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  );
}

export default Subscriptions;
