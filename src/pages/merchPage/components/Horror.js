import React, { Component } from "react";
import hellCat from "../../../img/hell-cat.svg";
import { Container, Row, Col } from "react-bootstrap";

const closeBox = {
  height: "300px",
  width: "300px",
  margin: "auto",
  marginTop: "50px",
  // // backgroundImage: `url(${ForestPicture})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  border: "2px solid rgb(142, 0, 0)",
};

export default class Horror extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <div className="clothes-box" style={closeBox}>
                <a href="/cap">CAPS</a>
              </div>
              <div className="clothes-box" style={closeBox}>
                <a href="/tShirt"></a>
              </div>
            </Col>
            <Col>
              <div className="clothes-box" style={closeBox}>
                <a href="/hoodie"></a>
              </div>
              <div className="clothes-box" style={closeBox}>
                <a href="/backpacks"></a>
              </div>
            </Col>
            <Col style={{ textAlign: "center" }}>
              <div className="hell-cat-box">
                <div className="hellcat">
                  <a href="#">horror</a>
                  <img src={hellCat} height="500px" alt="hell cat" />
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
