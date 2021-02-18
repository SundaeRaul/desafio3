import React from 'react';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Despesas from './pages/despesas';
import Receitas from './pages/Receitas';
import Inicial from '../src/pages/Inicial';
import Login from './pages/Login';
// import Cadastro from './pages/Cadastro';
// import Movimentacao from './pages/Movimentacao';
import Page404 from './pages/Page404';
import FormTeste from './pages/FormTeste';


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
            <Route path ="/Login" component={Login}/>
            {/* <Route path ="/Cadastro" component={Cadastro}/> */}
            {/* <Route path ="/Movimentacao" component={Movimentacao}/> */}
            <Route path ="/formteste" component={FormTeste}/>
            <Route component={Page404} />

        </Switch>
    );
}

export default Routes;