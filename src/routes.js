import React from 'react';

import App from './pages/App';
import Contato from './pages/Contato';


import { Switch, Route } from 'react-router-dom';


function Routes(){
    return(
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/Contato" component={Contato} />
        </Switch>
    );
}

export default Routes;