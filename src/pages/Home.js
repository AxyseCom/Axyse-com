import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header"



export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section className="inform-map"></section>
    </>
  );
}
