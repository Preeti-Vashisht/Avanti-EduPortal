import React from "react";
import { Jumbotron, Row, Col, Button, Container, Modal } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { useHistory } from "react-router-dom";
import "./style.css";
function Subjects(props) {
  const history = useHistory();

  const submit = localStorage.getItem("submit");
  // props.location.search
  //   ? props.location.search.split("=")[1]
  //   : false;
  const viewAssignmentHandler = () => {
    history.push("/view-assignment");
  };
  return (
    <>
      <Layout>
        <Button
          variant="primary"
          size="md"
          onClick={() => history.push("/")}
          style={{
            borderRadius: "15px",
            backgroundColor: "#6558F5",
            margin: "14px 10px  3px",
            height: "35px",
            lineHeight: "20px",
            borderColor: "none",
          }}
        >
          {"< Home"}
        </Button>
        <hr style={{ marginTop: "4px", marginBottom: "0px" }} />
        <Container className="text-center" fluid>
          <Row className="head">
            <Col className="cols-head">
              <h1>Assignment</h1>
            </Col>
          </Row>
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }} className="cols">
              <h1 className="sub-head">Chemistry</h1>
              <div className="title">
                <p className="items">Date:11/12/1995</p>
                <p className="items">Chapter:Matter</p>
                <p className="items">Teacher: Mrs. Sanjana Singh</p>
              </div>

              <Button
                variant="primary"
                size="md"
                style={{ backgroundColor: "#6558F5", borderRadius: "10px" }}
                onClick={() => viewAssignmentHandler()}
              >
                See Assignment
              </Button>
              {submit && (
                <div style={{ marginTop: "10px" }}>
                  <Button
                    variant="primary"
                    size="md"
                    style={{ backgroundColor: "#207868", borderRadius: "10px" }}
                    onClick={() => {
                      history.push("/check-marks");
                    }}
                  >
                    Check Marks
                  </Button>
                  <p
                    style={{
                      color: "#000000",
                      backgroundColor: "#8DD7CF",
                      marginTop: "10px",
                    }}
                  >
                    <span style={{ marginLeft: 5 }}>
                      Submitted on 01/06/2021
                    </span>
                  </p>
                </div>
              )}
            </Col>
          </Row>
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }} className="cols">
              <h1 className="sub-head">Physics</h1>
              <div className="title">
                <p className="items">Date:11/06/2021</p>
                <p className="items">Chapter:Gravity</p>
                <p className="items">Teacher: Mrs. Sanjana Singh</p>
              </div>
              <Button
                variant="primary"
                size="md"
                style={{ backgroundColor: "#6558F5", borderRadius: "10px" }}
                onClick={() => viewAssignmentHandler()}
              >
                See Assignment
              </Button>
            </Col>
          </Row>
          <Row className="rows">
            <Col md={{ span: 4, offset: 4 }} className="cols">
              <h1 className="sub-head">Maths</h1>
              <div className="title">
                <p className="items">Date:11/12/1995</p>
                <p className="items">Chapter:Trignometry</p>
                <p className="items">Teacher: Mrs. Sanjana Singh</p>
              </div>
              <Button
                variant="primary"
                size="md"
                style={{ backgroundColor: "#6558F5", borderRadius: "10px" }}
                onClick={() => viewAssignmentHandler()}
              >
                See Assignment
              </Button>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Subjects;
