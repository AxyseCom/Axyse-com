import React, { Component } from "react";
import Space from "./components/Space";
import Forest from "./components/Forest";
import Horror from "./components/Horror";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Design extends Component {
  render() {
    return (
      <>
      <Header />
      <div className="container-fluid p-0 cosmo-page">
        <Space />
        <Forest />
        <Horror />
      </div>
      <Footer />
      </>
    );
  }
}
