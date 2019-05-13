import React, {Component} from 'react';
import {
    Nav,
    NavDropdown,
    Navbar
    } from 'react-bootstrap';
    
import {
    HashRouter,
    Route,
    Switch,
    NavLink,
    Link,
    BrowserRouter
} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import SecondComponent from './SecondComponent';
import AboutUs from './aboutus';
import OurServices from './services';

class NavbarComponent extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" bg="danger" variant="light" sticky="top">
                <Navbar.Brand href="#home">
                    <img alt="" src=" data:image/png;base64,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" width="30" height="30" className=" d-inline-block align-top"/>
                    {'React-Bootstrap'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#aboutus">About</Nav.Link>
                        <Nav.Link href="#secondcomponent">SecondComponent</Nav.Link>
                        <Nav.Link href="#ourservices">Our Services</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#contact">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default NavbarComponent;