import React, { Component } from "react";
import hellCat from "../../../img/hell-cat.svg";
import { Container, Row, Col } from "react-bootstrap";

export default class Horror extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <div className="hell-cat-box">
                <div className="hellcat">
                  <a href="#">horror</a>
                  <img src={hellCat} height="900px" alt="hell cat" />
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
}
