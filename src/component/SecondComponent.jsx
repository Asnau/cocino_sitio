import React, {Component} from 'react';
import $ from 'jquery';
import {
    Jumbotron,
    Button,
    Container
} from 'react-bootstrap';

import './style/style-parallex.css';

class SecondComponent extends Component {
    render() {
        return(
            <React.Fragment>
                
                <Jumbotron fluid style={{height: 500, background: 'gray'}} id="secondcomponent">
                    <Button>asfbf</Button>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default SecondComponent;