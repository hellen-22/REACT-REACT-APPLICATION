import React, { useState } from 'react'
import { Col, Form } from 'react-bootstrap'
import Header from '../components/Header'

function Hooks() {
    const initial_object ={firstname : "", lastname : ""}
    const [name, setName] = useState(initial_object) 
  return (
    <div>
        <Header />
        
        <Form>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" value={name.firstname} onChange={e => setName({ ...name ,firstname: e.target.value})} />
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" value={name.lastname} onChange={e => setName({ ...name, lastname: e.target.value})} />
          </Form.Group>
        </Col>
        <Col>
        <p>First Name : {name.firstname}</p>
        <p>Last Name : {name.lastname}</p>
        </Col>
        
      </Form>
    </div>
  )
}

export default Hooks
