import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ResortBlock from "../home/block-components/resort-block/ResortBlock";
import { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      country: "",
      countryDATA: "",
    };
  }

  update(value1, value2) {
    this.setState({ country: value1, countryDATA: value2 });
  }
  render() {
    return (
      <>
        <Header update={this.update} />
        <ResortBlock
          country={this.state.country}
          countryDATA={this.state.countryDATA}
        />
        <Footer />
      </>
    );
  }
}
