import React, { useEffect, useState } from "react";
import { Form, Col, Row } from "react-bootstrap"
import axios from "axios";
import Header from "./Header";

function DataFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[id]);
  return (
    <div>
      <Header />
      <Row>
      <Col xs={6}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" value={id} onChange={e => setId(e.target.value)} />
          </Form.Group>
      </Col>
      </Row>
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetch;
