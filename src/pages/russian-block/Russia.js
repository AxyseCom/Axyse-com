import React, { Component } from "react";
import ResortList from "./components/ResortList";
import hybini from "./assets/img/hybini.png";
import krasnaya from "./assets/img/krasnaya.png";

export default class Russia extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const backgroundImg = [
      {
        backgroundImage: `url(${hybini})`,
      },
      {
        backgroundImage: `url(${krasnaya})`,

      },
    ];
    const resorts = [
      { id: 1, title: "хибины", bg: backgroundImg[0] },
      { id: 1, title: "красная поляна", bg: backgroundImg[1] },
    ];
    return (
      <section className="russia-block" id="rus-block">
        <h3>Россия</h3>
            <ResortList resorts={resorts} />
      </section>
    );
  }
}
