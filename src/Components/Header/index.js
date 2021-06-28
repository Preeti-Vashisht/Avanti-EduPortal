import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { logout } from "./../../actions";

function Header(props) {
  const auth = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const userlogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const renderLoggedInResults = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span onClick={userlogout} className="nav-link">
            LOGOUT
          </span>
        </li>
      </Nav>
    );
  };
  const renderLoggedOutResults = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            About
          </NavLink>
        </li>
      </Nav>
    );
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: 1 }}
      >
        <Container fluid>
          <li className="navbar-brand">
            <Link to="/">Avanti Education Portal</Link>
          </li>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            {auth.authenticate
              ? renderLoggedInResults()
              : renderLoggedOutResults()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
