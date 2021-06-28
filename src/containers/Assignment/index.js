import React, { useState } from "react";
import { Jumbotron, Row, Col, Button, Container } from "react-bootstrap";
import Layout from "./../../Components/Layout";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Worker } from "@react-pdf-viewer/core";
import filePDF from "./../../assets/dummy.pdf";
import "./style.css";
function Assignment(props) {
  const [viewPdf, setViewPdf] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const onClickHandler = () => {
    setViewPdf(true);
  };
  const pdfContainer = () => {
    return (
      <Container className="text-center">
        <h1>
          <i
            class="bi bi-x-circle"
            onClick={() => {
              setViewPdf(false);
            }}
          ></i>
        </h1>
        <Row>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <Viewer fileUrl={filePDF} plugins={[defaultLayoutPluginInstance]} />
          </Worker>
        </Row>
        <Row className="bottom-row">
          <Col md={{ span: 4, offset: 4 }}>
            <h2>Answer Submission</h2>

            <Button variant="primary" size="lg" block onClick={() => {}}>
              Add Image
            </Button>
            <Button variant="secondary" size="lg" block onClick={() => {}}>
              Submit Assignment
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };
  return (
    <>
      <Layout>
        {viewPdf ? (
          pdfContainer()
        ) : (
          <Container className="text-center">
            <Row className="rows">
              <Col md={{ span: 4, offset: 4 }} className="cols">
                <h1>Chemistry</h1>
                <p className="items">Date:11/12/1995</p>
                <p className="items">Chapter:11/12/1995</p>
                <p className="items">Teacheer:Sanjana Bisht</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onClickHandler()}
                >
                  See Assignment
                </Button>
              </Col>
            </Row>
            <Row className="rows">
              <Col md={{ span: 4, offset: 4 }} className="cols">
                <h1>Maths</h1>
                <p className="items">Date:11/12/1995</p>
                <p className="items">Chapter:11/12/1995</p>
                <p className="items">Teacheer:Sanjana Bisht</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onClickHandler()}
                >
                  See Assignment
                </Button>
              </Col>
            </Row>
            <Row className="rows">
              <Col md={{ span: 4, offset: 4 }} className="cols">
                <h1>Physics</h1>
                <p className="items">Date:11/12/1995</p>
                <p className="items">Chapter:11/12/1995</p>
                <p className="items">Teacheer:Sanjana Bisht</p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => onClickHandler()}
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
