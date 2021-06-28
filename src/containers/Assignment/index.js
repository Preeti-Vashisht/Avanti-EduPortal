import React from "react";
import { Jumbotron, Row, Col, Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import Assignment from "../../Components/Assignments";
import Layout from "./../../Components/Layout";
import "./style.css";
function Assignments(props) {
  const history = useHistory();
  return (
    <div>
      <Layout>
        <div>
          <Assignment />
          <Assignment />
        </div>
      </Layout>

      {/* <Jumbotron
        style={{ margin: "Srem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron> */}
    </div>
  );
}

export default Assignments;
