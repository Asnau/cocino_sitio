import React, {Component} from 'react';
import $ from 'jquery';
import {
    Jumbotron,
    Button,
    Container,
    Form,
    Row,
    Col
} from 'react-bootstrap';

import './style/style-parallex.css';

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: {
                Name: '',
                Email: '',
                Message: ''
            },
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]:value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({submitted: true});
        const {user} = this.state;
        const URL = "http://localhost:4000/signup";
        const data = JSON.stringify({
            name: user.Name,
            email: user.Email,
            message: user.Message
        });
        const otherParam= {
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                "Content-Type": "application/json"
            },
            body: data,
            method: 'POST'
        }
        fetch(URL, otherParam)
            .then(data => data.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }


    render() {
        const {user,submitted} = this.state;
        return(
            <React.Fragment>
                
                <Jumbotron fluid style={{height: 500, background: 'gray'}} id="secondcomponent">
                    <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                    
                        <h1 style={{color: 'white', textDecorationColor: 'white'}}>feedback are always welcome</h1>
                    </Container>
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Group controlId="Name" className={(submitted && !user.name ? 'has-error' : '')}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="Name" id="Name" placeholder="Your Name" onChange={this.handleChange}/>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="Email" className={(submitted && !user.email ? 'has-error' : '')}>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Your email" name="Email" id="Email" onChange={this.handleChange}/>
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group> 
                                </Col>
                            </Row>
                            <Form.Group controlId="ControlTextarea" className={(submitted && !user.message ? 'has-error' : '')}>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows="5" placeholder="Your Message" name="Message" id="Message" onChange={this.handleChange}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{float: 'right'}}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Feedback;