import React, { Component } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../../img/axyse-logo-svg.svg'

const menuStyle = {
    display: "block",
    height: "2px",
    width: "25px",
    backgroundColor: "rgb(255, 109, 12)",
    margin: "auto",
    marginTop: "5px",
    marginBottom: "5px"
}

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" br="warning" variant="warning">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            height="100"
                            width="100"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        <span style={menuStyle}></span>
                        <span style={menuStyle}></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/merch">Merch</Nav.Link>
                            <Nav.Link href="/graffiti">Graffiti</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info" className="btn btn-warning" style={{marginTop:"10px", margin:"auto"}}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}