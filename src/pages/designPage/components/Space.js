import React, { Component } from "react";
import Star from "./Star";

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
      x: event.pageX - 20,
      y: event.pageY - 125,
      items: [...this.state.items, this.state.x],
    });
    console.log(this.state.items);
  }
  render() {
    return (
      <>
        <div id="parent-star-box" onClick={this.mouseCoord}>
          {this.state.items.map((item, index) => (
            <Star key={index} coord={this.state}></Star>
          ))}
        </div>
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
      </>
    );
  }
}
