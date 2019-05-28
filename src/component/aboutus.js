import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

class AboutUs extends Component {
    render() {
        return(
            
            <Jumbotron style={{backgroundColor: 'white'}}>
                <Container id="aboutus">
                <Row>
                {/* style={{ background: 'blue' }} */ }
                    <Col sm={6} md={4}>
                        <Image src='https://source.unsplash.com/random/400x400' thumbnail/>
                    </Col>
                    <Col sm={6} md={8}>
                        <h1>About Us</h1>
                        <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac augue ac massa sollicitudin auctor ac ac lacus. Donec id dolor vitae nibh finibus aliquet. Curabitur magna sapien, dapibus et consectetur quis, tempor nec sem. Curabitur interdum blandit urna, quis porta odio viverra a. Nulla tristique suscipit turpis, sed lacinia tortor.</p>
                    </Col>
                </Row>
                </Container>
            </Jumbotron>
            
        );
    }
}

export default AboutUs;