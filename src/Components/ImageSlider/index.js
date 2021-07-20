import { useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
export default function ImageSlider(props) {
  let history = useHistory();

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
                onClick={(event) => history.push("/assignments?submit=true")}
                style={{
                  backgroundColor: "#C53D3D",
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
