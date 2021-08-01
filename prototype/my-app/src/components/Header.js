import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav"
import { LinkContainer } from "react-router-bootstrap"

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <LinkContainer to="/">
                <Navbar.Brand>PROTOTYPE</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
                <LinkContainer to="/basic-schedule">
                    <Nav.Link>Basic Irrigation Schedule</Nav.Link>
                </LinkContainer>
                <LinkContainer to="#SmartSchedule">
                    <Nav.Link>Smart Irrigation Schedule</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/calculations">
                    <Nav.Link>Calculations for Professionals</Nav.Link>
                </LinkContainer>
            </Nav>
            </Container>
        </Navbar>
    
    )
}