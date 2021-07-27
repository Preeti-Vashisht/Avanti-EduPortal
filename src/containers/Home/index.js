import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../../Components/Footer";
import Layout from "./../../Components/Layout";
import { logout } from "./../../actions";
import "./style.css";
function Home(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  function handleClick(path) {
    history.push(path);
  }

  const userlogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <Layout>
        <Button
          size="md"
          onClick={userlogout}
          style={{
            borderRadius: "15px",
            backgroundColor: "#e5e5e5",
            margin: "14px 10px  3px",
            height: "35px",
            borderColor: "#e5e5e5",
            color: "black",
            lineHeight: "20px",
          }}
        >
          {"< Log Out"}
        </Button>
        <hr style={{ marginTop: "4px", marginBottom: "0px" }} />
        <Container className=" text-center" fluid>
          <Row className="head">
            <Col>
              <h1>Home Page</h1>
            </Col>
          </Row>
          <div style={{ marginTop: "150px" }}>
            {/* <Row className="rows ">
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
            </Row> */}

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
    </>
  );
}

export default Home;
