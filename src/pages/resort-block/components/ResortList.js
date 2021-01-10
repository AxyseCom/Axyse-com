import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function ResortList(props) {
  return (
    <>
      <Container>
        <Row>
          {props.resorts.map((resort) => {
            return (
              <Col md={12} className="resort" style={resort.bg}>
                <a href="/resort">
                  <h4>{resort.title}</h4>
                </a>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
