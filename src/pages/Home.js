import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../assets/images/hill.svg";

const style = {
  backgroundImage: `url(${img})`,
};

export default function Home() {
  return (
    <>
      <header style={style}>
        <Container>
          <Row>
            <Col>1</Col>
            <Col>1</Col>
            <Col>1</Col>
          </Row>
        </Container>
      </header>
      <section className="inform-map"></section>
    </>
  );
}
