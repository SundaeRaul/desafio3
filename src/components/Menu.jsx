import React from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';


function Menu(){
    return(
        <ul>
            <li><Link to="/Sobre"> Sobre </Link></li>
            <li><Link to="/Contato">Contato</Link></li>
            <li><Link to="/Login"> Login </Link></li>
            <li><Link to="/Cadastro"> Cadastro </Link></li>
        </ul>
    );
}

export default Menu;
