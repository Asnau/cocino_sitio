import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    CardDeck,
    Card
} from 'react-bootstrap';

import styles from './style/services-styles.css';


export default class OurServices extends Component {
 render() {
     return(
        <Jumbotron fluid style={{background: 'gray'}} id="ourservices">
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                    
                <h1 style={{color: 'white', textDecoration: 'underline', textDecorationColor: 'white'}}>Our Services</h1>
            </Container>

            <CardDeck>
                <Card text="white" className="text-center p-3">
                <Card.Img src="https://source.unsplash.com/random/240x240" alt=""/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body">
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src="https://source.unsplash.com/random/241x240" alt=""/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body">
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src="https://source.unsplash.com/random/240x241" alt=""/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body">
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src="https://source.unsplash.com/random/240x239" alt=""/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body">
                    <p className='description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.
                    </p>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                        </small>
                    </footer>
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Jumbotron>
     );
 }
}