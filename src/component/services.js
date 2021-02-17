import React, {Component} from 'react';
import {
    Jumbotron,
    Container,
    CardDeck,
    Card
} from 'react-bootstrap';

import house_party from '../images/houseParty1.jpg';
import kitty_party from '../images/kitty-party.jpg';
import event_caterers from '../images/event-caterers.jpg';
import event_planning from '../images/event-planning.jpg';


export default function OurServices() {
     return(
        <Jumbotron fluid style={{backgroundColor: 'white', borderTop: '1px solid black'}} id="ourservices">
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                    
                <h1 style={{color: 'black', textDecoration: 'underline', textDecorationColor: 'black'}}>Our Services</h1>
            </Container>

            <CardDeck>
                <Card text="white" className="text-center p-3">
                <Card.Img src={house_party} alt="" style={{opacity: '0.5'}} />
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body" style={{color: 'black'}}>
                    <h3> House Party Caterers </h3>
                    {/* <p className='description'>
                        Eating is necessity but cooking is an art.
                    </p> */}
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src={kitty_party} alt="" roundedCircle style={{opacity: '0.5'}}/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body" style={{color: 'black'}}>
                    <h3> Kitty Parties </h3>
                    {/* <p className='description'>
                    Catering is extremely demanding financially and physically. It's a business.
                    </p> */}
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src={event_caterers} alt="" style={{opacity: '0.5'}}/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body" style={{color: 'black'}}>
                    <h3> Caterers For Events </h3>
                    {/* <p className='description' >
                    In catering, you're always changing; the client is always dictating to you in terms of their wishes.
                    </p> */}
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
                <Card text="white" className="text-center p-3">
                <Card.Img src={event_planning} alt="" style={{opacity: '0.5'}}/>
                <Card.ImgOverlay>
                    <blockquote className="blockquote mb-0 card-body" style={{color: 'black'}}>
                    <h3> Event Management </h3>
                    {/* <p className='description'>
                    As long as I don't have to go back to the catering hall and wait tables anymore, I'm very happy.
                    </p> */}
                    {/* <footer className="blockquote-footer">
                        <small className="text-muted">
                        Jon Bellion
                        </small>
                    </footer> */}
                    </blockquote>
                    </Card.ImgOverlay>
                </Card>
            </CardDeck>
        </Jumbotron>
     );
}