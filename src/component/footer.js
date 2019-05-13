import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Viewmap from './viewmap'


export default class Footeraboutus extends React.Component {
    constructor(props) {
        super(props);
        this.mapState = false;
        this.state = { activeIndex: 0 };
        this.mapStates = this.mapStates.bind(this);
    }

    mapStates(state) {
        this.setState({
            mapState: !this.state.mapState
        })
    }
  
  render() {
    return (
      <React.Fragment>
      
       <footer style={{background: "#778899"}} id="contact">
       <Container fluid style={{background: 'white'}}>
        <Container>
          <Row style={{height: '25px'}}/>
          <Row>
            <Col xs="12" sm='4' md='4' lg='4'>
                <h2 style={{color: '#191919', textDecoration: 'underline', textDecorationColor: 'black'}}>Contact Us</h2>
                <p>Address: Essex St.New York, USA</p>
            </Col>
            <Col xs='12' sm='4' md='4' lg='4'>
                
                <Viewmap mapState={this.state.mapState} mapStates={this.mapStates}/>
            </Col>
            <Col xs='12' sm='4' md='4' lg='4'>
              <h2 style={{color: '#191919', textDecoration: 'underline', textDecorationColor: 'black'}}>Reservation</h2>
              
                  <p>Phone: +385 21 333 777</p>
                  <p>Email: reservation@restaurantdany.com</p>
              
            </Col>
          </Row>
          <Row style={{height: '25px'}}/>
        </Container>
      </Container>
        <Container fluid style={{background: '#c6c0f0 ', color: '#e6e6fa !important'}}>
          <span className="text-muted" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>copyright to Ashish Nautiyal</span>
        </Container>
       </footer>
      </React.Fragment>
    )
  }
}
