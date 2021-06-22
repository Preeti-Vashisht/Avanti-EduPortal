import React from "react";
import { Jumbotron, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "./../../Components/Layout";
import "./style.css";
function Home(props) {
  return (
    <div>
      <Layout>
        <div className="container text-center">
          <Row style={{ margin: 50 }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="primary" size="lg" block>
                Class Recordings
              </Button>
            </Col>
          </Row>
          <Row style={{ margin: 50 }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="primary" size="lg" block>
                Study Material
              </Button>
            </Col>
          </Row>

          <Row style={{ margin: 50 }}>
            <Col md={{ span: 4, offset: 4 }}>
              <Button variant="primary" size="lg" block>
                Assignments
              </Button>
            </Col>
          </Row>
        </div>
      </Layout>

      {/* <Jumbotron
        style={{ margin: "Srem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron> */}
    </div>
  );
}

export default Home;
