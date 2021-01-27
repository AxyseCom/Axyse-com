import React from "react";
import { Component } from "react";
import { Col, Container, Row , Accordion, Card, Button} from "react-bootstrap";
export default class Resort extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>   
          <Card.Body>
            <ul>
              <li><h4>рейтинг</h4>&nbsp;&nbsp;{this.props.data.skipass.day1}</li>
              <li><h4>рейтинг</h4>&nbsp;&nbsp;{this.props.data.skipass.day1}</li>
              <li><h4>рейтинг</h4>&nbsp;&nbsp;{this.props.data.skipass.day1}</li>
              <li><h4>рейтинг</h4>&nbsp;&nbsp;{this.props.data.skipass.day1}</li>
            </ul>
                
                
          </Card.Body>      
      </>
    );
  }
}
