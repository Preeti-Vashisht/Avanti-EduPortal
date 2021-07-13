import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../Components/Layout";

function ClassRecordings(props) {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "Srem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to class Recordings</h1>
        </Jumbotron>
      </Layout>
    </div>
  );
}

export default ClassRecordings;
