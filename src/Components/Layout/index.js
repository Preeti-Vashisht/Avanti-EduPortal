import React from "react";
import Header from "../Header";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./style.css";
function Layout(props) {
  let history = useHistory();
  return (
    <div>
      <Header />
      <Button
        variant="primary"
        size="md"
        onClick={() => history.goBack()}
        style={{
          borderRadius: "15px",
          backgroundColor: "#6558F5",
          margin: "14px 10px  3px",
          height: "35px",
          borderColor: "none",
        }}
      >
        {"<Home"}
      </Button>
      <hr style={{ marginTop: "4px", marginBottom: "0px" }} />
      {props.children}
    </div>
  );
}

export default Layout;
