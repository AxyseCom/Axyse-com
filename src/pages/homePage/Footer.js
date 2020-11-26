import React, { Component } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button, Row } from 'react-bootstrap'
import logo from '../../img/axyse-logo-svg.svg'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <img
                    src={logo}
                    height="60"
                    width="60"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </footer>
        )
    }
}