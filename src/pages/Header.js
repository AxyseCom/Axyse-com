import React, { Component } from "react";
import Snow from "./Snow";
import img from "../assets/images/hill.svg";
import logo from "../assets/images/axyse-logo-svg.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

const style = {
  backgroundImage: `url(${img})`,
};

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.mouseCoord = this.mouseCoord.bind(this);
    this.state = {
      x: 0,
      y: 0,
      items: [],
    };
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  mouseCoord(event) {
    this.setState({
      x: event.pageX,
      y: event.pageY,
      items: [...this.state.items, this.state.x],
    });
    if (this.state.items > 15) {
      this.state.items.length = 15;
    }
    console.log(this.state.items.length);
  }
  render() {
    return (
      <>
        <Navbar className="navigation" fixed="top" variant="dark">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="70"
              width="70"
              className="d-inline-block align-top"
              alt="Logo"
              href="/home"
              onClick={this.scrollToTop}
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home" style={style.link}>
              <Link
                activeClass="active"
                to="inform-map"
                spy={true}
                smooth={true}
                offset={0}
                duration={1500}
              >
                Россия
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar>
        <div className="header" onClick={this.mouseCoord} style={style}>
          {this.state.items.map((item, index) => (
            <Snow key={index} coord={this.state}></Snow>
          ))}
        </div>
        <h1>Axyse</h1>
        <h2>найди свой курорт</h2>
        <div className="uran-pos-box">
          <div className="planetBox">
            <div className="ring-one-front"></div>
            <div className="ring-one-back"></div>
            <div className="ring-one-front2"></div>
            <div className="ring-one-back2"></div>
            <div className="ring-one-front3"></div>
            <div className="ring-one-back3"></div>
            <div className="ring-two-front"></div>
            <div className="ring-two-back"></div>
            <div className="ring-three-front"></div>
            <div className="ring-three-back"></div>
            <div className="planetUr" id="ur"></div>
          </div>
        </div>
      </>
    );
  }
}
