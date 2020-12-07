import React from "react";
import hellCat from "../../../img/hell-cat.svg";
import { Container, Row, Col } from "react-bootstrap";

export default function Horror() {
  return (
    <>
      <Container>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <div className="hell-cat-box">
              <div className="hellcat">
                <a href="/horror">horror</a>
                <a href="/horror" style={{ marginTop: "0" }}>
                  <img src={hellCat} height="900px" alt="hell cat" />
                </a>
                <div id="blood"></div>
                <div id="blood-sec"></div>
                <div id="blood-th"></div>
                <div id="blood-for"></div>
                <div id="blood-fh"></div>
                <div id="blood-hummer"></div>
                <div id="blood-hummer-sec"></div>
                <div id="blood-hummer-th"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
