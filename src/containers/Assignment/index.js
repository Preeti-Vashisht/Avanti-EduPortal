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
import ImagePreview from "../../Components/ImagePreview";
import ImageSlider from "../../Components/ImageSlider";

function Assignment(props) {
  let history = useHistory();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [files, setFiles] = useState([]);
  const [fullscreen, setFullscreen] = useState(true);
  const fileInput = React.useRef(null);
  const [show, setShow] = useState(false);
  const [showAssignment, setShowAssignment] = useState(false);
  const [file, setFile] = useState(null);
  const [showAssignmentSlider, setShowAssignmentSlider] = useState(false);
  const [message, setMessage] = useState("");

  const assignmentRetake = (e) => {
    let fileObj = e.target.files[0];
    fileObj.url = URL.createObjectURL(fileObj);
    setFiles((prevFiles) => {
      let newFiles = prevFiles;
      newFiles[file.index] = fileObj;
      return newFiles;
    });
    setFile({ ...fileObj, index: file.index });
    console.log(files);
  };

  const assignmentDelete = () => {
    setFiles((prevFiles) => {
      let newFiles = prevFiles;
      newFiles.splice(file.index, 1);
      return newFiles;
    });
    setFile(null);
    setShowAssignment(false);
  };

  const viewPrevAssignment = () => {
    setFile(() =>
      file.index - 1 < 0
        ? { ...files[files.length - 1], index: files.length - 1 }
        : { ...files[file.index - 1], index: file.index - 1 }
    );
  };

  const viewNextAssignment = () => {
    setFile(() =>
      file.index == files.length - 1
        ? { ...files[0], index: 0 }
        : { ...files[file.index + 1], index: file.index + 1 }
    );
  };
  const handleClose = () => {
    setShow(false);
  };
  const showAssignmentHandler = (setVal, file, index) => {
    setFile({ ...file, index: index });
    setShowAssignment(setVal);
  };
  const showAssignmentSliderHandler = () => {
    setFile({ ...files[0], index: 0 });
    setShowAssignmentSlider(true);
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

  return (
    <div>
      <Layout>
        {!showAssignment && !showAssignmentSlider && (
          <>
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
            <>
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
                  </Col>
                </Row>
                {localStorage.getItem("submit") ? (
                  <div style={{ marginTop: "10px" }}>
                    <p
                      style={{
                        color: "#000000",
                        opacity: "0.6",
                        marginTop: "10px",
                        fontSize: "17px",
                      }}
                    >
                      <span style={{ marginLeft: 5 }}>
                        Submitted on 01/06/2021
                      </span>
                    </p>
                    <p
                      style={{
                        color: "#000000",
                        backgroundColor: "#8DD7CF",
                        marginTop: "10px",
                        fontSize: "17px",
                        height: "34px",
                        lineHeight: "34px",
                      }}
                    >
                      <span style={{ marginLeft: 5 }}>Checked</span>
                    </p>
                    <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                      Submitted Answer
                    </p>
                    <Button
                      variant="primary"
                      size="md"
                      style={{
                        backgroundColor: "#207868",
                        borderRadius: "10px",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>
                        <i className="bi bi-file-earmark-pdf"></i>
                      </span>
                      Physics_Gravity_Student_1
                    </Button>

                    <p
                      style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        marginTop: "10px",
                      }}
                    >
                      Worksheet
                    </p>
                  </div>
                ) : (
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
                          if (files.length) {
                            showAssignmentSliderHandler();
                          }
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
                            onClick={() => {
                              showAssignmentHandler(true, file, index);
                            }}
                            block
                          >
                            {file.name}
                          </Button>
                        ))}
                    </Col>
                  </Row>
                )}
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
          </>
        )}
        {showAssignment && (
          <ImagePreview
            file={file}
            assignmentRetake={assignmentRetake}
            setShowAssignment={setShowAssignment}
            assignmentDelete={assignmentDelete}
            fileInput={fileInput}
          />
        )}
        {showAssignmentSlider && (
          <ImageSlider
            file={file}
            viewNextAssignment={viewNextAssignment}
            viewPrevAssignment={viewPrevAssignment}
            setShowAssignmentSlider={setShowAssignmentSlider}
          />
        )}
      </Layout>
    </div>
  );
}

export default Assignment;
