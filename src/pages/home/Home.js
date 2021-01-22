import React from "react";
import Header from "./Header";
import ResortBlock from "../resort-block/ResortBlock";
import { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      country: "",
      countryDATA: ""
    };
  }

  update(value1, value2) {
    this.setState({ country: value1, countryDATA: value2 });
  }
  render() {
    return (
      <>
        <header>
          <Header update={this.update} />
        </header>
        <ResortBlock country={this.state.country} countryDATA={this.state.countryDATA}/>
        <footer>
          <h3>lolec</h3>
        </footer>
      </>
    );
  }
}
