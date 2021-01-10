import React, { Component, useState } from "react";

export default function Snow(props) {
  const [x, setX] = useState(props.coord.x);
  const [y, setY] = useState(props.coord.y);
  return (
    <div
      style={{ left: x, top: y}}
      id={x + y}
      className={"snow"}
    ></div>
  );
}
