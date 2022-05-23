import React from "react";
import { Table } from "react-bootstrap";

function Subscriptions() {
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
          <tr>
            <td>1</td>
            <td>Hellen</td>
            <td>Wainaina</td>
            <td>Monthly</td>
          </tr>
          <tr>
            <td>2</td>
            <td>John</td>
            <td>Doe</td>
            <td>Yearly</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry</td>
            <td>Madowo</td>
            <td>Daily</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Otieno</td>
            <td>Onyango</td>
            <td>Daily</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Subscriptions;
