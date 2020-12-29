import React, { Component } from "react";
import Snow from "./Snow";
import img from "../assets/images/hill.svg";

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
        <div className="header" onClick={this.mouseCoord} style={style}>
          {this.state.items.map((item, index) => (
            <Snow key={index} coord={this.state}></Snow>
          ))}        
        </div>
        <h1>Axyse</h1>
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
