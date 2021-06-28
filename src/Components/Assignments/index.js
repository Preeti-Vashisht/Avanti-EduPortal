import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./style.css";
function Assignment(props) {
  return (
    <>
      <Container className="assignment text-center">
        <Row style={{ margin: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <h2>Physics Assignment</h2>
            <p>Date:11/06/2019</p>
            <p>Subject:Maths</p>
            <Button variant="primary" size="lg" onClick={() => {}}>
              Submit Assignment
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Assignment;
