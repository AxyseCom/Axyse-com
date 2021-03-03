import React, { Component } from "react";
import ResortList from "./components/ResortList";
import resortDATA from "./assets/json/resorts.json";

export default class ResortBlock extends Component {
  constructor(props) {
    super(props);
    this.getResortList= this.getResortList.bind(this)
    this.state = {
      country: resortDATA
    };
  }

  getResortList() {
    switch (this.props.countryDATA) {
      case "russia": {
        return <ResortList resorts={this.state.country.russia} />;
      }
      case "france": {
        return <ResortList resorts={this.state.country.france} />;
      }
      case "austria": {
        return <ResortList resorts={this.state.country.austria} />;
      }
    }
  }

  render() {
    const resorts = resortDATA;
    return (
      <section className="resort-block" id="res-block">
        <h3>{this.props.country}</h3>
        {this.getResortList()}
      </section>
    );
  }
}
