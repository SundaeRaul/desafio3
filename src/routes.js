import React from 'react';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Despesas from './pages/despesas';
import Receitas from './pages/Receitas';
import NotFound from './pages/NotFound';
import Inicial from '../src/pages/Inicial'

import { Switch, Route } from 'react-router-dom';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Route path="/despesas" component={Despesas} />
            <Route path="/Receitas" component={Receitas} />
            <Route path="/Inicial" component={Inicial}/>
            <Route component={NotFound} />

        </Switch>
    );
}

export default Routes;