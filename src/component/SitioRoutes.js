import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Switch
} from 'react-router-dom';

import HomeComponent from './HomeComponent';
import SecondComponent from './SecondComponent';
import AboutUs from './aboutus';
import OurServices from './services';

class Routes extends Component {
    render() {
        return(
            <Switch> 
                    <Route path="/" Component={HomeComponent}/>
                    <Route path="/aboutus" Component={AboutUs}/>
                    <Route path="/secondcomponent" Component={SecondComponent}/>
                    <Route path="/ourservices" Component={OurServices}/>
            </Switch>
        )
    }
}

export default Routes;