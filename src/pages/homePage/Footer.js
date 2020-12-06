import React from "react";
import logoReacr from "../../img/react-logo.svg";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
} from "react-bootstrap";
import logo from "../../img/axyse-logo-svg.svg";

export default function Footer() {
  return (
    <footer>
      <Navbar.Brand href="/home">
          <img
            src={logo}
            height="60px"
            width="60px"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
    </footer>
  );
}
