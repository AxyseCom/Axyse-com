import React from "react";
import { Col } from "react-bootstrap";
export default function Resort(props) {
  return (
    <>
      {props.resorts.map((resort) => {
        return <Col md={12} className="resort" style={resort.bg}><a href="#"><h4>{resort.title}</h4></a></Col>;
      })}
    </>
  );
}
