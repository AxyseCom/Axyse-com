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

const amazingMountStyle = {
  height: "150px",
  width: "150px",
  backgroundColor: "red",
};

export default function Forest() {
  return (
    <>
      <div className="forest" style={forestStyle}>
        <div style={amazingMountStyle}>
          <a
            href="/amazing-mount"
            style={{ display: "block", height: "100%", width: "100%" }}
          ></a>
        </div>
      </div>
    </>
  );
}
