import React from 'react';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Despesas from './pages/despesas';
import Receitas from './pages/Receitas';
import Renderizacao from './pages/Renderizacao';
import Cadastro from './pages/Cadastro';

import { Switch, Route } from 'react-router-dom';

function Routes(){
    return(
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/Sobre" component={Sobre} />
            <Route path="/contato" component={Contato} />
            <Route path="/Login" component={Login} />
            <Route path="/despesas" component={Despesas} />
            <Route path="/Receitas" component={Receitas} />
            <Route path="/Renderizacao" component={Renderizacao} />
            <Route path="/Cadastro" component={Cadastro}/>

        </Switch>
    );
}

export default Routes;