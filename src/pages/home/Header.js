import React, { Component } from "react";
import Snow from "./Snow";
import img from "../../assets/images/hill.svg";
import logo from "../../assets/images/axyse-logo-svg.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const style = {
  backgroundImage: `url(${img})`,
};

export default class Space extends Component {
  constructor(props) {
    super(props);
    this.mouseCoord = this.mouseCoord.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
    this.state = {
      x: 0,
      y: 0,
      items: [],
      bgColor: "#001122",
    };
  }
  scrollToTop() {
    scroll.scrollToTop();
    const block = document.getElementById("res-block");
    setTimeout(() => {
      block.style.display = "none";
    }, 1000);
  }
  onRusBlock() {
    const block = document.getElementById("res-block");
    block.style.display = "block";
  }
  mouseCoord(event) {
    this.setState({
      x: event.pageX,
      y: event.pageY,
      items: [...this.state.items, this.state.x],
    });
  }
  listenScrollEvent() {
    const block = document.getElementById("headerID");
    const headerHeight = block.offsetHeight - 50;
    if (window.scrollY > headerHeight) {
      this.setState({ bgColor: "#b1cfee" });
    } else if (window.scrollY > 99) {
      this.setState({ bgColor: "#11ffee00" });
    } else {
      this.setState({ bgColor: "#001122" });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <>
        <Navbar
          className="navigation"
          style={{ backgroundColor: this.state.bgColor }}
          fixed="top"
          variant="dark"
          expand="lg"
        >
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" style={style.link}>
                <Link
                  activeClass="active"
                  to="resort-block"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                  onClick={this.onRusBlock}
                >
                  Россия
                </Link>
              </Nav.Link>
              <NavDropdown
                title="Европа"
                id="basic-nav-dropdown"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="#action/3.1">
                  <Link
                    activeClass="active"
                    to="resort-block"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onClick={this.onRusBlock}
                  >
                    Россия
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Link
                    activeClass="active"
                    to="resort-block"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                    onClick={this.onRusBlock}
                  >
                    Россия
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          className="header"
          id="headerID"
          onClick={this.mouseCoord}
          style={style}
        >
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
