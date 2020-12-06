import React, { Component } from "react";
import ForestPicture from "../../../img/mount.svg";

const forestStyle = {
  height: "150vh",
  width: "100%",
  backgroundImage: `url(${ForestPicture})`,
  backgroundSize: "cover",
  backgroundPosition: "right center",
  backgroundRepeat: "no-repeat",
};

export default class Forest extends Component {
  render() {
    return (
      <>
        <div className="forest" style={forestStyle}></div>
      </>
    );
  }
}
