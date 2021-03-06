import React from "react";
import { Component } from "react";
import { Col, Container, Row, Accordion, Card, Button } from "react-bootstrap";
import {
  Button as MaterialButton,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

export default class Resort extends Component {
  constructor(props) {
    super(props);
    this.getPrice = this.getPrice.bind(this);
    this.deletePrice = this.deletePrice.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      day: "",
      price: "",
      currency: "",
      id: 0,
      checkAdult: true,
      checkChildren: false,
    };
  }
  getPrice(event, day, price, currency) {
    this.setState({
      day: day,
      price: price,
      currency: currency,
      id: this.props.data.id,
    });
  }

  deletePrice(event) {
    this.setState({
      day: "",
      price: "",
      currency: "",
      id: this.props.data.id,
      checkAdult: true,
      checkChildren: false
    });
  }

  handleChange(event) {
    if (this.state.checkAdult == false) {
      this.setState({ checkAdult: true, checkChildren: false });
    } else {
      this.setState({ checkAdult: false, checkChildren: true });
    }
    this.getPrice();
  }

  render() {
    if (this.state.id != this.props.data.id) {
      this.deletePrice();
    }
    return (
      <>
        <Card.Body>
          <ul>
            <li>
              <h4>транспорт</h4>
              {this.props.data.travel.map((a) => {
                return (
                  <>
                    <i class={a}></i>&nbsp;
                  </>
                );
              })}
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
              <h4>цены на skipass</h4>
              <h5>
                {this.state.day}
                &nbsp;
                {this.state.price}
                &nbsp;
                {this.state.currency}
              </h5>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkAdult}
                    onChange={this.handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Взрослый"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.checkChildren}
                    onChange={this.handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Детский"
              />
              <ButtonGroup
                size="large"
                color="primary"
                aria-label="large outlined primary button group"
              >
                {this.props.data.skipass.map((price) => {
                  return (
                    <MaterialButton
                      onClick={(e) => {
                        if (this.state.checkAdult == true) {
                          this.getPrice(
                            e,
                            price.dayNumber,
                            price.adultDay,
                            price.currency
                          );
                        } else {
                          this.getPrice(
                            e,
                            price.dayNumber,
                            price.childDay,
                            price.currency
                          );
                        }
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
