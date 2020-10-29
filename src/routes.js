import React from 'react';

import App from './pages/App';
import Contato from './pages/Contato';
import Index from './pages/index';


import { Switch, Route } from 'react-router-dom';


function Routes(){
    return(
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/Contato" component={Contato} />
            <Route path="/Index" component={Index} />
        </Switch>
    );
}

export default Routes;