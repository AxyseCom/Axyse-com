import React from "react"
import { Carousel } from "react-bootstrap"
import graffitiRed from "../../../img/graffiti-red.jpg"

export default function GraffitiSlider(){
    return (
      <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={graffitiRed}
                alt="graffiti 1"
                >
            </img>
            <Carousel.Caption>
                <h3>Graffiti digital sep 2020</h3>
                <p>This one is my first graffiti for axyse.com</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={graffitiRed}
                alt="graffiti 1"
                >
            </img>
            <Carousel.Caption>
                <h3>Graffiti digital sep 2020</h3>
                <p>This one is my first graffiti for axyse.com</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
}
