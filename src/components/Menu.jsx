import React from 'react';

import { Link } from 'react-router-dom';

import './Menu.css';


function Menu(){
    return(
        <ul className="unlist">
            <li className="itlista"><Link to="/Sobre"> Sobre </Link></li>
            <li className="itlista"><Link to="/contato">Contato</Link></li>
            <li className="itlista"><Link to="/Login"> Login </Link></li>
            <li className="itlista"><Link to="/Cadastro"> Cadastro </Link></li>
        </ul>
    );
}

export default Menu;
