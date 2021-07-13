import React, { useState } from "react";
import { Container, Form, Button, Row, Col, Modal } from "react-bootstrap";
import Layout from "../../Components/Layout";
import { Document, Page, pdfjs } from "react-pdf";

import url from "./../../assets/dummy.pdf";

function Assignment(props) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const fileObj = [];
  const fileArray = [];
  const [files, setFiles] = useState([]);
  const fileInput = React.useRef(null);
  const [show, setShow] = useState(false);
  // const [open, setOpen] = useState(false);
  // const [currentSlide, setCurrentSlide] = useState(0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShow(false);
  };
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  const handleShow = () => {
    if (files.length > 0) {
      setMessage("Asignment Submitted successfully");
      setShow(true);
    } else {
      setMessage("Please select a image");
      setShow(true);
    }
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

  return (
    <div>
      <Layout>
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
                    backgroundColor: `${
                      files.length > 0 ? "#207868" : "#6c757d"
                    }`,
                  }}
                  block
                  onClick={handleShow}
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
                      // onClick={openSlideshow(index)}
                      block
                    >
                      <span>
                        {file.name}
                        <i
                          class="bi bi-x-circle"
                          style={{ color: "#000" }}
                          onClick={() => {
                            removeFile(file.name);
                          }}
                        ></i>
                      </span>
                    </Button>
                  ))}
                {/* <SimpleModalSlideshow
                  slides={slides}
                  currentSlide={currentSlide}
                  open={open}
                  onClose={handleClose}
                  onNext={handleNext}
                  onPrev={handlePrev}
                  classNamePrefix="modal-slideshow-example1"
                /> */}
              </Col>
            </Row>
            {/* <Row>
            <div className="main">
              <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} width={600} />
              </Document>
              <div>
                <div className="pagec">
                  Page {pageNumber || (numPages ? 1 : "--")} of{" "}
                  {numPages || "--"}
                </div>
                <div className="buttonc">
                  <button
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                    className="Pre"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </Row> */}
          </Container>
        </>
      </Layout>
    </div>
  );
}

export default Assignment;
