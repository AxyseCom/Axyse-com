import React from "react";
import Header from "./Header";
import ResortBlock from "../resort-block/ResortBlock";
import { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      data: "",
    };
  }

  update(value) {
    this.setState({ data: value });
  }
  render() {
    return (
      <>
        <header>
          <Header update={this.update} />
        </header>
        <ResortBlock data={this.state.data}/>
        <footer>
          <h3>lolec</h3>
        </footer>
      </>
    );
  }
}
