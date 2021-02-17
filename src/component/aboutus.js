import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap';

import photo from '../images/photo.jpg';

export default function AboutUs() {
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
                        <p style={{}}>नमस्कार! मेरा नाम राम दयाल नौटियाल है, मुझे विभिन्न होटलों और खानपान व्यवसायों में 30 से अधिक वर्षों का अनुभव है। मेरा वर्तमान व्यवसाय हमारे पारंपरिक काम "सरोला" से लिया गया है, जिसका अर्थ है गढ़वाली में खाना बनाना। हमें अपने वंश के अनुसार 1200 A.D. के बाद से शुभ अवसरों पर भोजन पकाने का काम सौंपा गया था। हम आधुनिक दलों के साथ सभी शुभ अवसरों में पूर्ण स्वच्छता के साथ भोजन की व्यवस्था करते हैं।
                        </p>
                    </Col>
                </Row>
                </Container>
            </Jumbotron>
            
        );
}