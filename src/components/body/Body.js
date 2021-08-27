import React from 'react';
import Menu from './Menu.js'
import Aboutus from './Aboutus.js'
import Contactus from './Contactus.js'
import Home from './Home.js';

import { Route, Redirect, Switch } from 'react-router-dom'

let Body = () => {
    return (

        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/contact" exact component={Contactus} />
                <Route path="/about" exact component={Aboutus} />
                <Redirect from="/" to="/home" />
            </Switch>

        </div>

    );
}

export default Body;