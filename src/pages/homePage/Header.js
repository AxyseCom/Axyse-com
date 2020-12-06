import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../../img/axyse-logo-svg.svg";

const menuStyle = {
  display: "block",
  height: "2px",
  width: "25px",
  backgroundColor: "rgb(255, 109, 12)",
  margin: "auto",
  marginTop: "5px",
  marginBottom: "5px",
};

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="md" br="warning" variant="warning">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={logo}
            height="100"
            width="100"
            className="d-inline-block align-top"
            alt="Logo"
            href="/home"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span style={menuStyle}></span>
          <span style={menuStyle}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/design">Design</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
