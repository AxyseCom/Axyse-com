import React from "react";
import { Col, Container, Row, Accordion, Card, Button } from "react-bootstrap";
import Resort from "./Resort.js";
import resortBG from "../../../../../assets/images/resorts-bg.svg"
export default function ResortList(props) {
  return (
    <>
      <Accordion>
        {props.resorts.map((resort) => {
          return (
            <Card>
              <Card.Header
                className="resort"
                style={{
                  // backgroundImage: `url(${resort.bg})`,
                  backgroundImage: `url(${resortBG})`,
                }}
              >
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={resort.id}
                >
                  {resort.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={resort.id}>
                <Resort data={resort.resort}/>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </>
  );
}