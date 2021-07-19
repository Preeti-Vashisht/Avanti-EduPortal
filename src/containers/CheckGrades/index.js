import React, { useState } from "react";
import { Jumbotron, Row, Col, Button, Container, Modal } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { useHistory } from "react-router-dom";
import "./style.css";
function CheckGrades(props) {
  const history = useHistory();
  const [notes] = useState("Please improve your handwriting");
  return (
    <div>
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
            borderColor: "none",
          }}
        >
          {"< Home"}
        </Button>
        <hr style={{ marginTop: "4px", marginBottom: "0px" }} />
        <Container className="text-center">
          <Row style={{ opacity: 0.6 }}>
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
              <h3 style={{ fontWeight: "bold", fontSize: "25px" }}>
                Total Marks
              </h3>
              <Button
                variant="primary"
                size="lg"
                style={{
                  backgroundColor: "#E6E8E6",
                  borderRadius: "325px",
                  borderColor: "none",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  color: "#000",
                  fontSize: "20px",
                  borderColor: "none",
                }}
              >
                5/10
              </Button>
              <h3
                style={{
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginBottom: "15px",
                  fontSize: "25px",
                }}
              >
                Teacher's Comments
              </h3>
              <Button
                variant="primary"
                size="md"
                style={{
                  backgroundColor: "#6558F5",
                  borderRadius: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                block
              >
                Question 1
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              backgroundColor: "rgba(255, 232, 164, 0.38)",
              borderRadius: "10px",
            }}
          >
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
          <Row style={{ backgroundColor: "rgba(255, 232, 164, 0.38)" }}>
            <Col
              md={2}
              xs={3}
              sm={2}
              style={{
                borderRadius: "15px",
              }}
            >
              <p>Comments:</p>
            </Col>
            <Col
              style={{
                borderRadius: "15px",
              }}
              md={9}
              xs={9}
              sm={8}
            >
              <textarea
                value={notes}
                style={{
                  backgroundColor: "#E5E5E5",
                  minWidth: "100%",
                  borderRadius: "15px",
                  border: "none",
                  borderStyle: "none",
                  height: "80px",
                  padding: "10px",
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
          <Row
            style={{
              backgroundColor: "rgba(255, 232, 164, 0.38)",
              borderRadius: "10px",
            }}
          >
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
