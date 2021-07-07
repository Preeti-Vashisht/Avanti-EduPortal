import React from "react";
import { Jumbotron } from "react-bootstrap";
function StudyMaterial(props) {
  return (
    <div>
      <Jumbotron
        style={{ margin: "Srem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Study Material</h1>
      </Jumbotron>
    </div>
  );
}

export default StudyMaterial;
