import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import photo from '../images/photo.jpg';

class AboutUs extends Component {
    render() {
        return(
            
            <Jumbotron style={{backgroundColor: 'white'}}>
                <Container id="aboutus">
                <Row>
                {/* style={{ background: 'blue' }} */ }
                    <Col sm={6} md={4}>
                        <Image src={photo} thumbnail/>
                    </Col>
                    <Col sm={6} md={8}>
                        <h1>About Us</h1>
                        <p style={{}}>My name is Ram Dayal Nautiyal, I have an experience of more than 30 years in various hotel and catering businesses. 
                        My current business is derived from our traditional work which is "Sarola", which means cook in Garhwali. 
                        We were designated the task of cooking food on auspicious occasions since 1200 A.D. as per our lineage. 
                        We arrange food with full hygiene in all auspicious occasions along with modern parties.
                        </p>
                    </Col>
                </Row>
                </Container>
            </Jumbotron>
            
        );
    }
}

export default AboutUs;