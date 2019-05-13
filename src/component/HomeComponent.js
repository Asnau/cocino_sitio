import React, {Component} from 'react';
import $ from 'jquery';
import {
 Carousel,
 Container,
 Row,
 Col
} from 'react-bootstrap';

import './style/style-parallex.css';

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
        const styleimg = {
            maxwidth: '100%',
            color: 'blue'
        };
        return(
            <React.Fragment>
                <div ref='UniqueElementIdentifies' className="parallax" id="parallax-2" data-image-src= 'https://source.unsplash.com/random/1920x1082' data-height="600px">
                 <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>                    
                    <h1 style={{color: 'white', margin: '5em auto'}}>WELCOME</h1>
                 </Container>
                 <svg id="" preserveAspectRatio="xMidYMax meet" class="svg-separator sep12" viewBox="0 0 1600 200" style={{display: 'block'}} data-height="200">
            <polygon class="" style={{fill: '#e9ecef'}} points="-4,24 800,198 1604,24 1604,204 -4,204 "></polygon>
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