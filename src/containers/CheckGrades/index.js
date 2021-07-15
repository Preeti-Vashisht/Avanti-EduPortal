import React from "react";
import { Jumbotron, Row, Col, Button, Container, Modal } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { useHistory } from "react-router-dom";
import "./style.css";
function CheckGrades(props) {
  const history = useHistory();
  return (
    <div>
      <Layout>
        <Button
          variant="primary"
          size="md"
          onClick={() => history.goBack()}
          style={{
            borderRadius: "15px",
            backgroundColor: "#6558F5",
            margin: "14px 10px  3px",
            height: "35px",
            borderColor: "none",
          }}
        >
          {"< Home"}
        </Button>
        <hr style={{ marginTop: "4px", marginBottom: "0px" }} />
        <Container className="text-center">
          <Row style={{ opacity: 0.3 }}>
            <Col md={{ span: 4, offset: 4 }}>
              <h3
                style={{
                  marginTop: "9px",
                  marginBottom: "0.1rem",
                  fontSize: "25px",
                  fontWeight: "700",
                }}
              >
                Physics
              </h3>
              <p style={{ marginBottom: "0.1rem", fontSize: "10px" }}>
                Date:11/06/2021
              </p>
              <p style={{ marginBottom: "0.1rem", fontSize: "10px" }}>
                Chapter:Gravity
              </p>
              <p style={{ marginBottom: "0.1rem", fontSize: "10px" }}>
                Teacher: Mrs. Sanjana Singh
              </p>
              <p
                style={{
                  color: "#000000",
                  marginTop: "10px",
                }}
              >
                Submitted on 01/06/2021
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p
                style={{
                  color: "#000000",
                  backgroundColor: "#8DD7CF",
                  marginTop: "10px",
                }}
              >
                <span style={{ marginLeft: 5 }}>Checked</span>
              </p>
              <h3 style={{ fontWeight: "bold" }}>Total Marks</h3>
              <Button
                variant="primary"
                size="lg"
                style={{
                  backgroundColor: "#E6E8E6",
                  borderRadius: "20px",
                  borderColor: "none",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  color: "#000",
                }}
              >
                5/10
              </Button>
              <h3 style={{ fontWeight: "bold", marginTop: "15px" }}>
                Teacher's Comments
              </h3>
              <Button
                variant="primary"
                size="md"
                style={{ backgroundColor: "#6558F5", borderRadius: "10px" }}
                block
              >
                Question 1
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={{ margin: "10px", borderRadius: "15px" }}>
              <p>Marks*:</p>
            </Col>
            <Col
              style={{
                margin: "10px",
                borderRadius: "15px",
                backgroundColor: "#E5E5E5",
              }}
            >
              <p>3</p>
            </Col>
            <Col style={{ margin: "10px", borderRadius: "15px" }}>
              <p>outof</p>
            </Col>
            <Col
              style={{
                margin: "10px",
                borderRadius: "15px",
                backgroundColor: "#E5E5E5",
              }}
            >
              <p>5</p>
            </Col>
          </Row>
          <Row>
            <Col md={3} style={{ borderRadius: "15px" }}>
              <p>Comments:</p>
            </Col>
            <Col
              style={{
                borderRadius: "15px",
              }}
              className="text-right"
              md={8}
            >
              <textarea
                style={{
                  backgroundColor: "#E5E5E5",
                  minWidth: "100%",
                  borderRadius: "15px",
                  border: "none",
                  borderStyle: "none",
                }}
              />
            </Col>
          </Row>
          <Button
            variant="primary"
            size="md"
            style={{
              backgroundColor: "#6558F5",
              borderRadius: "10px",
              marginTop: "20px",
            }}
            block
          >
            Question 2
          </Button>
          <Row>
            <Col style={{ margin: "10px", borderRadius: "15px" }}>
              <p>Marks*:</p>
            </Col>
            <Col
              style={{
                margin: "10px",
                borderRadius: "15px",
                backgroundColor: "#E5E5E5",
              }}
            >
              <p>3</p>
            </Col>
            <Col style={{ margin: "10px", borderRadius: "15px" }}>
              <p>outof</p>
            </Col>
            <Col
              style={{
                margin: "10px",
                borderRadius: "15px",
                backgroundColor: "#E5E5E5",
              }}
            >
              <p>5</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
}

export default CheckGrades;
