import React from 'react';

import App from './pages/App';
import Contato from './pages/Contato';
import Index from './pages/index';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Despesas from './pages/despesas';


import { Switch, Route } from 'react-router-dom';



function Routes(){
    return(
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/Index" component={Index} />
            <Route path="/Sobre" component={Sobre} />
            <Route path="/Contato" component={Contato} />
            <Route path="/Login" component={Login} />
            <Route path="/Despesas" component={Despesas} />

        </Switch>
    );
}

export default Routes;