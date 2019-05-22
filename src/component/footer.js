import React from 'react';
import $ from 'jquery';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';
import Viewmap from './viewmap'
import top from '../images/top.ico';


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
    const styles = {
      display: 'block',
      position: 'fixed',
      bottom: '20px',
      right: '30px',
      zIndex: 99,
      border: 'none',
      outline: 'none',
      backgroundcolor: 'red',
      color: 'black',
      cursor: 'pointer',
      padding: '15px',
      borderRadius: '4px',
      height: '8vh'
    }

    return (
      <React.Fragment>
       <footer style={{background: "#778899"}} id="contact">
       <img src={top} onClick={this.onclick} style={styles} >
                      {/* <img style={{display: 'inline-block', marginRight: '10px'}}/> */} 
      </img>
       <Container fluid style={{background: 'white'}}>
        <Container>
          <Row style={{height: '25px'}}/>
          <Row>
            <Col xs="12" sm='4' md='4' lg='4'>
                <h2 style={{color: '#191919', textDecoration: 'underline', textDecorationColor: 'black'}}>Contact Us</h2>
                <p>Address: Garhwal Sarola Catering Services,</p>
                <p>Saraswatipuram, Miyanwala,</p>
                <p>Dehradun - 248005</p>
            </Col>
            <Col xs='12' sm='4' md='4' lg='4'>
                
                <Viewmap mapState={this.state.mapState} mapStates={this.mapStates}/>
            </Col>
            <Col xs='12' sm='4' md='4' lg='4'>
              <h2 style={{color: '#191919', textDecoration: 'underline', textDecorationColor: 'black'}}>Reservation</h2>
              
                  <p>Phone: +91 75059 47871</p>
                  <p>Email: ramdayal.nautiyal@gmail.com</p>
              
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
  onclick() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  }
}
