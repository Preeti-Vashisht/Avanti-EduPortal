import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Footer from "../../Components/Footer";
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
        <Container className=" text-center" fluid>
          <Row className="head">
            <Col>
              <h1>Home Page</h1>
            </Col>
          </Row>
          <div style={{ marginTop: "90px" }}>
            <Row className="rows ">
              <Col md={{ span: 4, offset: 4 }}>
                <Button
                  variant="primary"
                  size="lg"
                  style={{ backgroundColor: "#6558F5" }}
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
                  style={{ backgroundColor: "#6558F5" }}
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
                  style={{ backgroundColor: "#6558F5" }}
                  block
                  onClick={() => {
                    handleClick("assignments");
                  }}
                >
                  Assignments
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </Layout>
      <Footer />
    </>
  );
}

export default Home;
