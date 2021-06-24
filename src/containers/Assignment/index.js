import React from "react";
import { Jumbotron, Row, Col, Button,Container } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Layout from "./../../Components/Layout";
import Subject from "./../../Components/Subjects";
import "./style.css";
function Assignment(props) {
  const history = useHistory();
  return (
    <>
      <Layout>   
      <Container className="text-center">
      <Subject subjectName="Maths" date="11/12/2019" chapter="Algebra" teacher="Sanjana Singh"/>
      <Subject subjectName="Chemistry" date="11/12/2019" chapter="Molecules" teacher="Sanjana Singh"/>
      <Subject subjectName="Physics" date="11/12/2019" chapter="Gravitation" teacher="Sanjana Singh"/>
        </Container>
        </Layout>
    </>
  );
}

export default Assignment;
