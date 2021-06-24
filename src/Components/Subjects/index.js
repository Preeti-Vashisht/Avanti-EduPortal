import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./style.css";
function Subject(props) {
  return (
    <>
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }}className="cols">
               <h1>{props.subjectName}</h1>
               <p className="items">Date:{props.date}</p>
               <p className="items">Chapter:{props.chapter}</p>
               <p className="items">Teacher:{props.teacher}</p>
               <Button variant="primary"
                size="lg"
               
                onClick={() => {
                  
                }}>See Assignment</Button>
            </Col>
          </Row>

    </>
  );
}
export default Subject;
