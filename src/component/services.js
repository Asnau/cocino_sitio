import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    CardDeck,
    Card
} from 'react-bootstrap';

import styles from './style/services-styles.css';
import house_party from '../images/houseParty1.png';
import kitty_party from '../images/kitty-party.jpg';
import event_planning from '../images/event-planning.jpg';


export default class OurServices extends Component {
 render() {
     return(
        <Jumbotron fluid style={{background: 'gray'}} id="ourservices">
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                    
                <h1 style={{color: 'white', textDecoration: 'underline', textDecorationColor: 'white'}}>Our Services</h1>
            </Container>

            <CardDeck>
                <Card text="white" className="text-center p-3">
                <Card.Img src={house_party} alt=""/>
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
                <Card.Img src={kitty_party} alt="" roundedCircle/>
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
                <Card.Img src={kitty_party} alt=""/>
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
                <Card.Img src={event_planning} alt=""/>
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