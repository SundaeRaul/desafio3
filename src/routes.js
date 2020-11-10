import React from 'react';
import Contato from './pages/Contato';
import Index from './pages/index';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Despesas from './pages/despesas';
import Receitas from './pages/Receitas';
import Renderizacao from './pages/Renderizacao';

import { Switch, Route } from 'react-router-dom';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Index} exact/>
            <Route path="/Sobre" component={Sobre} />
            <Route path="/Contato" component={Contato} />
            <Route path="/Login" component={Login} />
            <Route path="/Despesas" component={Despesas} />
            <Route path="/Receitas" component={Receitas} />
            <Route path="/Renderizacao" component={Renderizacao} />

        </Switch>
    );
}

export default Routes;