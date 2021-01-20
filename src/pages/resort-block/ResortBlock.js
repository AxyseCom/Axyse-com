import React, { Component } from "react";
import ResortList from "./components/ResortList";
import resortDATA from "./assets/json/resorts.json";

export default class ResortBlock extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    const resorts = resortDATA.russia;
    return (
      <section className="resort-block" id="res-block">
        <h3>{this.props.data}</h3>
        <ResortList resorts={resorts} />
      </section>
    );
  }
}
