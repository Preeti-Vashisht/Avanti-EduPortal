import { useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
export default function ImageSlider(props) {
  let history = useHistory();

  return (
    <div>
      <div
        style={{
          height: "5rem",
          lineHeight: "5rem",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.21)",
        }}
      >
        <p>आपके शिक्षक को फ़ोटो इस तरह दिखेगी</p>
      </div>

      <div style={{ textAlign: "center" }}>
        {props.file.url && (
          <>
            <button
              class="bi bi-chevron-left"
              onClick={(event) => props.viewPrevAssignment()}
              style={{
                borderRadius: "20px",
              }}
            ></button>
            <img
              className="img-fluid"
              src={props.file.url}
              alt={props.file.name}
              style={{ maxHeight: "100%", maxWidth: "80%" }}
            ></img>
            <button
              class="bi bi-chevron-right"
              onClick={(event) => props.viewNextAssignment()}
              style={{ borderRadius: "20px" }}
            ></button>
          </>
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
              <button
                type="button"
                class="btn "
                style={{
                  backgroundColor: "#4E605C",
                  borderRadius: "14px",
                  margin: "10px",
                }}
                onClick={(event) => {
                  props.setShowAssignmentSlider(false);
                }}
              >
                Back
              </button>
            </div>

            <div class="align-self-end ml-auto">
              <button
                type="button"
                class="btn "
                onClick={(event) => {
                  localStorage.setItem("submit", true);
                  history.push("/assignments");
                }}
                style={{
                  backgroundColor: "#207868",
                  borderRadius: "14px",
                  margin: "10px",
                }}
              >
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
