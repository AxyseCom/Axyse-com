import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../assets/images/logo-light.svg";

function scrollToTop() {
    scroll.scrollToTop();
    const block = document.getElementById("res-block");
    setTimeout(() => {
      block.style.display = "none";
    }, 1000);
  }
function getDate(){
    const date = new Date();
    return date.getFullYear().toString()
}

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row className="justify-content-md-center">
            <Col style={{
                height:"160px",
                margin: "auto",
                textAlign: "center"
            }}>
            <img
                src={Logo}
                height="70"
                width="70"           
                alt="Logo"
                href="/home"
                style={{
                    marginTop:"30px"
                }}
                onClick={scrollToTop}
              />
              <p>© {getDate()} Axyse.com All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
