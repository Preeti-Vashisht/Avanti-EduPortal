import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { useHistory } from "react-router-dom";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import filePDF from "./../../assets/dummy.pdf";

function Assignment(props) {
  let history = useHistory();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [files, setFiles] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const fileInput = React.useRef(null);
  const [show, setShow] = useState(false);
  const [imgPreview, setImagePreview] = useState();
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (url) => {
    // setImagePreview(url);
    // setShow(true);
    console.log(url);
  };

  const uploadFiles = (e) => {
    let fileObj = e.target.files[0];
    fileObj.url = URL.createObjectURL(fileObj);
    setFiles((prevFiles) => [...prevFiles, fileObj]);
    console.log(files);
  };
  // const removeFile = (name) => {
  //   let newFiles = files.filter((file) => file.name !== name);
  //   setFiles(newFiles);
  // };

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
        <>
          <Modal
            show={show}
            // fullscreen={fullscreen}
            onHide={handleClose}
            // dialogClassName="modal-90h"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Custom Modal Styling
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {/* <img src={imgPreview} w-100 alt="imgPreview" /> */}
              <h1>{imgPreview}</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
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
                  onChange={uploadFiles}
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
                    backgroundColor: `${
                      files.length > 0 ? "#207868" : "#6c757d"
                    }`,
                  }}
                  block
                  onClick={() => {
                    history.push("/assignments?submit=true");
                  }}
                >
                  Submit Assignment
                </Button>
                {files.length > 0 &&
                  files.map((file, index) => (
                    <Button
                      variant="secondary"
                      size="md"
                      style={{
                        borderRadius: "10px",
                        padding: "4px",
                        backgroundColor: "#C9C9C9",
                        color: "#3664BE",
                        textDecorationLine: "underline",
                      }}
                      onClick={handleShow(file.url)}
                      block
                    ></Button>
                  ))}
              </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
              <Col style={{ width: "100%" }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                  <Viewer
                    theme="bootstrap"
                    fileUrl={filePDF}
                    plugins={[defaultLayoutPluginInstance]}
                  />
                </Worker>
              </Col>
            </Row>
          </Container>
        </>
      </Layout>
    </div>
  );
}

export default Assignment;
