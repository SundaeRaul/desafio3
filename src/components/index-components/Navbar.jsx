import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo2.png'
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <div className="navbarWrapper">
            <div className="logoWrapper">
                <Link to="/"><img src={Logo} alt=""/></Link>                
            </div>
            <div className="buttonWrapper">
                <ul className="listWrapper">
                    <li><Link className="listItem" to="/Sobre">Sobre</Link></li>
                    <li><Link className="listItem" to="/Contato">Contato</Link></li>
                    <li><Link className="listItem" to="/Login">Login</Link></li>
                    <li><Link className="listItem" to="/Cadastro">Cadastro</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;