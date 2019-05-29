import React, {Component} from 'react';
import $ from 'jquery';
import {
 Container,
 Row,
 Col
} from 'react-bootstrap';

import './style/style-parallex.css';
import homeImage from '../images/home_image.jpg';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.para = this.para.bind();
        this.state = {};
    }

    componentDidMount = (props) => {
        this.para();
        document.addEventListener('scroll', this.isInViewport, true);
    }

    para() {
        $(document).ready(function () {
            // Populate images from data attributes.
        var scrolled = $(window).scrollTop()
        $('.parallax').each(function(index) {
            var imageSrc = $(this).data('image-src')
            var imageHeight = $(this).data('height')
            $(this).css('background-image','url(' + imageSrc + ')')
            $(this).css('height', imageHeight)
      
            // Adjust the background position.
            var initY = $(this).offset().top
            var height = $(this).height()
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        })
      
        $(window).scroll(function() {
          var scrolled = $(window).scrollTop()
          $('.parallax').each(function(index, element) {
            var initY = $(this).offset().top
            var height = $(this).height()
            var diff = scrolled - initY
            var ratio = Math.round((diff / height) * 100)
            $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
          })
        })
        })
    }

    render() {
        
        return(
            <React.Fragment>
                <div ref='UniqueElementIdentifies' className="parallax" id="parallax-2" data-image-src= {homeImage} data-height="600px" style={{opacity: '0.7'}} >
                 <Container> 
                     <Col>      
                        <Row style={{marginBottom: '0px' }}>
                            <h1 style={{ color: '#c82535', margin: '5em auto 0 auto', boxShadow : '10px 5px 25px #6f6fbd', backgroundColor: '#004085ba' }}>Garhwal Sarola Catering Services</h1>
                        </Row>
                        <Row style={{height:'20px', margin: '0 auto 10em auto' }}>
                            <p style={{color: '#c82535', margin: 'auto', fontSize: 'xx-large', boxShadow : '10px 5px 25px #6f6fbd', backgroundColor: '#004085ba'}} >Welcomes You</p>
                        </Row>
                    </Col>                   
                 </Container>
                 <svg id="" preserveAspectRatio="xMidYMax meet" className="svg-separator sep12" viewBox="0 0 1600 200" style={{display: 'block'}} data-height="200">
            <polygon className="" style={{fill: 'white'}} points="-4,24 800,198 1604,24 1604,204 -4,204 "></polygon>
            </svg>
                </div>
                {/* <Carousel ref='UniqueElementIdentifies' className="parallex" id="parallex-2">
                    <Carousel.Item>
                        <img
                        className="d-block w-100 parallex"
                        dataimgsrc="https://source.unsplash.com/random/1920x856"
                        alt="First slide"
                        style={styleimg}
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        dataimgsrc="https://source.unsplash.com/random/1920x857"
                        alt="Third slide"
                        style= {styleimg}
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        dataimgsrc="https://source.unsplash.com/random/1921x856"
                        alt="Third slide"
                        style= {styleimg}
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                
            </React.Fragment>
        );
    }
}

export default HomeComponent;