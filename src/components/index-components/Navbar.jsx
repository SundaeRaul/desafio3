import React from 'react';
import './Navbar.css'
import Logo from '../../../src/images/logo2.png'

class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div>
                <a href="#"><img src={Logo} alt="Logo Financ"/></a> 
                </div>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Cadastro</a></li>
                </ul>                
            </div>
        );
    }
}

export default NavBar;