import React from "react";
import { Component } from "react";
import { Col, Container, Row, Accordion, Card, Button } from "react-bootstrap";
import { Button as MaterialButton, ButtonGroup } from "@material-ui/core";

export default class Resort extends Component {
  constructor(props) {
    super(props);
    this.getPrice = this.getPrice.bind(this);
    this.state = {
      day: "",
      price: "",
      currency: ""
    };
  }
  getPrice(event, day, price, currency) {
    this.setState({ day: day, price: price, currency: currency });
  }
  render() {
    return (
      <>
        <Card.Body>
          <ul>
            <li>
              <h4>транспорт</h4>
              {this.props.data.travel.map((a) => {
                return (
                  <>
                    <i class={a}></i>&nbsp;&nbsp;
                  </>
                );
              })}
              &nbsp;&nbsp;
            </li>
            <li>
              <h4>рейтинг</h4>
              {this.props.data.rating.map((a) => {
                return (
                  <>
                    <i class={a}></i>
                  </>
                );
              })}
            </li>
            <li>
              <h4>Цены на skipass</h4>
              <h5>
                {this.state.day}
                &nbsp;
                {this.state.price}
                &nbsp;
                {this.state.currency}
              </h5>
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                {this.props.data.skipass.map((price) => {
                  return (
                    <MaterialButton
                      onClick={(e) => {
                        this.getPrice(
                          e,
                          price.dayNumber,
                          price.adultDay, 
                          price.currency
                        );
                      }}
                    >
                      {price.dayNumber}
                    </MaterialButton>
                  );
                })}
              </ButtonGroup>
            </li>
          </ul>
        </Card.Body>
      </>
    );
  }
}
