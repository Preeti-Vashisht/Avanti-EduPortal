import React, { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import Layout from "../Layout";

export default function ImagePreview(props) {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          height: "5rem",

          backgroundColor: "rgba(0, 0, 0, 0.21)",
        }}
      >
        <h2>निश्चित करे कि आप अपना उत्तर पढ़ सकते हैं</h2>
      </div>
      <div style={{ textAlign: "center", height: "90%" }}>
        {props.file.url && (
          <img
            className="img-fluid"
            src={props.file.url}
            alt={props.file.name}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          ></img>
        )}
      </div>
      <div
        style={{
          height: "5rem",
          lineHeight: "80px",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.21)",
        }}
      >
        <div class="container ">
          <div class="d-flex ">
            <div class="align-self-start mr-auto">
              <input
                type="file"
                ref={props.fileInput}
                onChange={props.assignmentRetake}
                style={{ display: "none" }}
              />
              <button
                type="button"
                class="btn "
                style={{
                  backgroundColor: "#4E605C",
                  borderRadius: "14px",
                  margin: "10px",
                }}
                onClick={(event) => {
                  props.fileInput.current.click();
                }}
              >
                Retake
              </button>
            </div>

            <div class="align-self-end ml-auto">
              <button
                type="button"
                class="btn "
                onClick={() => props.assignmentDelete()}
                style={{
                  backgroundColor: "#C53D3D",
                  borderRadius: "14px",
                  margin: "10px",
                }}
              >
                Delete
              </button>
              <button
                type="button"
                class="btn "
                onClick={() => props.setShowAssignment(false)}
                style={{ backgroundColor: "#27A48D", borderRadius: "14px" }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
