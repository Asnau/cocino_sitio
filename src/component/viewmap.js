import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

import {
    Figure
} from 'react-bootstrap';

class Viewmap extends Component{
    

    render() {
        return (
            <React.Fragment>
                
                    <Figure isOpen={this.props.mapState} toggle={this.props.mapStates} className={this.props.className} size= 'xl' style={{display: 'block'}}>
                        <div toggle={this.props.mapStates}><h2 style={{color: '#191919', textDecoration: 'underline', textDecorationColor: 'black'}}>Map</h2></div>
                        <div style={{position: 'relative', height: '12em',padding: '0rem'}}>
                            <Map google={this.props.google} zoom={14}>
                                <Marker onClick={this.onMarkerClick}
                                        name={'Current location'} 
                                        position={{lat: 30.272890, lng: 78.091972}}/>
                        
                                <InfoWindow onClose={this.onInfoWindowClose}>
                                    <div>
                                    {/* <h1>{this.state.selectedPlace.name}</h1> */}
                                    </div>
                                </InfoWindow>
                            </Map>
                        </div>
                    </Figure>
               
            </React.Fragment>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyBtXDNbs8CadfYjPNFFQ4FKe1o0r5IY0C0')
})(Viewmap)
