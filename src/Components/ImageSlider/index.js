import { useHistory } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
export default function ViewAssignmentSlider(props) {
  let history = useHistory();
  const styles = {
    retake: {
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "26px",
      alignItems: "center",
      textAlign: "center",
      color: "#FFFFFF",
      float: "left",
      background: "rgba(78, 96, 92, 1)",
      padding: "6px",
      borderRadius: "14px",
      margin: "8px",
    },
    continue: {
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "26px",
      alignItems: "center",
      align: "center",
      color: "#000000",
      background: "rgba(39, 164, 141, 1)",
      padding: "6px",
      borderRadius: "14px",
      margin: "8px",
    },
    delete: {
      fontFamily: "IBM Plex Sans",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "20px",
      lineHeight: "26px",
      alignItems: "center",
      align: "center",
      color: "#000000",
      margin: "8px",
      background: "rgba(197, 61, 61, 1)",
      borderRadius: "14px",
      padding: "6px",
    },
  };
  return (
    <Container className="text-center">
      <Row id="viewAssigmnetHeader">
        <Col md={{ span: 4, offset: 4 }}>
          <h3
            style={{
              marginTop: "9px",
              marginBottom: "0.1rem",
              fontSize: "25px",
              fontWeight: "200",
            }}
          >
            निश्चित करे कि आप अपना उत्तर पढ़ सकते हैं
          </h3>
        </Col>
      </Row>
      <Row id="viewAssigmnetCanvas">
        <Col>
          <Button
            style={styles.continue}
            onClick={(event) => props.viewPrevAssignment()}
          >
            pre
          </Button>
          {props.file.url && (
            <img
              className="img-fluid"
              src={props.file.url}
              alt={props.file.name}
            ></img>
          )}
          <Button
            style={styles.continue}
            onClick={(event) => props.viewNextAssignment()}
          >
            next
          </Button>
        </Col>
      </Row>
      <Row
        id="viewAssigmnetFooter"
        style={{
          background: "rgba(0, 0, 0, 0.21)",
          position: "absolute",
          width: "100%",
        }}
      >
        <Button
          variant="primary"
          size="md"
          style={styles.retake}
          onClick={(event) => {
            props.setShowAssignmentSlider(false);
          }}
        >
          Back
        </Button>
        <Button
          variant="primary"
          size="md"
          style={styles.delete}
          onClick={(event) => history.push("/assignments?submit=true")}
        >
          Submit Assignment
        </Button>
      </Row>
    </Container>
  );
}
