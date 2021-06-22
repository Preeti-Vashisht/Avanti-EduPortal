import React from "react";
import Header from "../Header";
import { Row, Col, Container } from "react-bootstrap";
import "./style.css";
function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

export default Layout;
