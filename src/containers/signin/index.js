import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI";
import { useDispatch } from "react-redux";
import { login, isUserLoggedIn } from "../../actions/auth.actions";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./style.css";
import Footer from "../../Components/Footer";

function Signin(props) {
  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      studentId,
    };
    dispatch(login(user));
  };
  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }
  return (
    <div>
      <Layout />
      <Container>
        <Row className="top-buffer">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                placeholder="Student ID"
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
              />
              <div className="text-center">
                <Button
                  variant="primary"
                  style={{ backgroundColor: "#6558F5", marginTop: "18px" }}
                  type="submit"
                >
                  Log In!
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Signin;
