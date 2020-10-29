import React from 'react';

import App from './pages/App';
import Contato from './pages/Contato';
import Index from './pages/index';
import Login from './pages/Login';


import { Switch, Route } from 'react-router-dom';



function Routes(){
    return(
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Contato" component={Contato} />
            <Route path="/Index" component={Index} />
            <Route path="/Login" component={Login} />
        </Switch>
    );
}

export default Routes;