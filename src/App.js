import React, {Component} from 'react';
import NavbarComponent from './component/NavbarComponent';
import HomeComponent from './component/HomeComponent';
import AboutUs from './component/aboutus';
import SecondComponent from './component/SecondComponent';
import OurServices from './component/services';
import Gallery from './component/gallery';
import Footeraboutus from './component/footer';


class App extends Component {
    render() {
        return(
            <React.Fragment>
                <NavbarComponent/>
                <HomeComponent/>
                <AboutUs/>
                <OurServices/>
                <SecondComponent/>
                <Gallery/>
                <Footeraboutus/>
            </React.Fragment>
        );
    }
}

export default App;