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
import Feedback from './feedback';
import AboutUs from './aboutus';
import OurServices from './services';

class NavbarComponent extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" style={{backgroundColor: '#004085d4'}}>
                <Navbar.Brand href="#home">
                    <img alt="" src="" width="30" height="30" className=" d-inline-block align-top"/>
                    {'G.S.C.S'}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#aboutus">About</Nav.Link>
                        <Nav.Link href="#ourservices">Our Services</Nav.Link>
                        <Nav.Link href="#feedbackform">Feedback</Nav.Link>
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