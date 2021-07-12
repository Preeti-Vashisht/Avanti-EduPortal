import React, { useState, useRef } from "react";
import { Jumbotron, Row, Col, Button, Container, Modal } from "react-bootstrap";
import Layout from "./../../Components/Layout";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import filePDF from "./../../assets/dummy.pdf";
import "./style.css";
function Assignment(props) {
  const fileObj = [];
  const fileArray = [];
  const [viewPdf, setViewPdf] = useState(false);
  const [show, setShow] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setShow(false);
    if (submit) {
      setViewPdf(false);
    }
  };
  const handleShow = () => {
    if (files.length > 0) {
      setMessage("Asignment Submitted successfully");
      setShow(true);
      setSubmit(true);
    } else {
      setMessage("Please select a image");
      setShow(true);
    }
  };
  const [files, setFiles] = useState([]);
  const fileInput = React.useRef(null);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const viewAssignmentHandler = () => {
    setViewPdf(true);
  };
  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(fileObj[0][i]);
    }
    setFiles(fileArray);
  };
  const removeFile = (name) => {
    let newFiles = files.filter((file) => file.name !== name);
    setFiles(newFiles);
  };
  const pdfContainer = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>{message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
            </Col>
          </Row>
          <Row className="ans-submit">
            <Col md={{ span: 4, offset: 4 }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Answer Submission
              </h3>
              <input
                type="file"
                ref={fileInput}
                onChange={uploadMultipleFiles}
                multiple
                style={{ display: "none" }}
              />
              <Button
                variant="primary"
                size="md"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "#6558F5",
                  padding: "4px",
                }}
                block
                onClick={(event) => {
                  fileInput.current.click();
                }}
              >
                Add Image
              </Button>
              <Button
                variant="secondary"
                size="md"
                style={{
                  borderRadius: "10px",
                  padding: "4px",
                }}
                block
                onClick={handleShow}
              >
                Submit Assignment
              </Button>
            </Col>
          </Row>
          {/* {files.length > 0 &&
                files.map((file) => (
                  <p>
                    <span>
                      {file.name}
                      <i
                        class="bi bi-x-circle"
                        onClick={() => {
                          alert(file.name);
                          removeFile(file.name);
                        }}
                      ></i>
                    </span>
                  </p>
                ))}
           

          <h1>
            <i
              class="bi bi-x-circle"
              onClick={() => {
                setViewPdf(false);
              }}
            ></i>
          </h1>
          <Row>
            <Col>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={filePDF}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </Col>
          </Row> */}
        </Container>
      </>
    );
  };
  return (
    <>
      <Layout>
        {viewPdf ? (
          pdfContainer()
        ) : (
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
                  {submit && (
                    <p className="items" style={{ color: "green" }}>
                      <i class="bi bi-check-circle"></i>
                      <span style={{ marginLeft: 5 }}>
                        Submitted on 01/06/2021
                      </span>
                    </p>
                  )}
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
        )}
      </Layout>
    </>
  );
}

export default Assignment;
