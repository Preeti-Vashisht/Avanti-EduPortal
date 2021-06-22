import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI";
import Loading from "./../../Components/Loading";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "./../../actions";

function Signup(props) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [err, setError] = useState("");
  const auth = useSelector((state) => state.authReducer);
  const user = useSelector((state) => state.userReducer);
  const { loading, error, message } = user;
  const dispatch = useDispatch();

  const userSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(signup(user));
  };

  if (auth.authenticate) {
    return <Redirect to={"/"} />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Layout />
      <Container>
        {message || error}
        <Row style={{ margin: 50 }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Firstname"
                    placeholder="firstname"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    type="text"
                    label="Lastname"
                    placeholder="Lastname"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </Col>
              </Row>

              <Input
                type="email"
                label="Email"
                placeholder="Email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />

              <Input
                type="password"
                label="Password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
