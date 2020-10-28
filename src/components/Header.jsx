import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../images/logo2.png';

import './Header.css';

function Header(){
    return(
        <header>

            <nav id="navbar">
                <div>
                    <Link to="/" title="FinanC">
                        <img src={ Logo } alt="Logo FinanC"></img>
                    </Link>
                </div>
                
                <ul>
                    <li><Link to="/"> Sobre </Link></li>
                    <li><Link to="/Contato">Contato</Link></li>
                    <li><Link to="/"> Login </Link></li>
                    <li><Link to="/"> Cadastro </Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;