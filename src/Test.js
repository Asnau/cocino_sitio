import React, {Component} from 'react';
import {
    Container,
    Card,
    CardColumns,
    CardDeck,
    Media
} from 'react-bootstrap';

import styles from './component/style/services-styles.css';

class Test extends Component {
    render() {
        return(
            <>
                <CardDeck>
                    <Card text="white" className="text-center p-3">
                    <Card.Img src="https://source.unsplash.com/random/240x240" alt=""/>
                    <Card.ImgOverlay>
                        <blockquote className="blockquote mb-0 card-body">
                        <p className = 'description'>
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
                        <p className = 'description'>
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
                        <p className = 'description'>
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
                        <p className = 'description'>
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
            </>
        )
    }
}

export default Test;