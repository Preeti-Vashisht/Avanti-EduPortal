import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Layout from "./../../Components/Layout";
import "./style.css";
function Home(props) {
  const history = useHistory();
  function handleClick(path) {
    history.push(path);
  }
  return (
    <>
      <Layout>
        <Container className="options text-center">
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                variant="primary"
                size="lg"
                block
                onClick={() => {
                  handleClick("class-recordings");
                }}
              >
                Class Recordings
              </Button>
            </Col>
          </Row>
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                variant="primary"
                size="lg"
                block
                onClick={() => {
                  handleClick("study-material");
                }}
              >
                Study Material
              </Button>
            </Col>
          </Row>

          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }}>
              <Button
                variant="primary"
                size="lg"
                block
                onClick={() => {
                  handleClick("assignments");
                }}
              >
                Assignments
              </Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Home;
