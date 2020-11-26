import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import hummerLogo from "../../../../img/hummer-logo.svg";
import machete from "../../../../img/machete.svg";

export default class Merch extends Component {
  render() {
    return (
      <>
        <div className="cap-box">
          <div className="logo-page-cap">
            <img
              src={hummerLogo}
              height="50px"
              alt="hummer logo"
              className="hummer-img"
            />
            <h1>caps</h1>
            <img
              src={machete}
              height="50px"
              alt="hummer logo"
              className="hummer-img"
            />
          </div>
          <Container>
            <Row xs={1} md={4}>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
              <Col>
                <div className="wear">
                  <img
                    src={hummerLogo}
                    height="100px"
                    alt="hummer logo"
                    className="hummer-img"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
