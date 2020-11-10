import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../../src/images/logo2.png'

class NavBar extends React.Component{
    render(){
        return(
            <div className="navbar">         
                <ul>
                    <li><Link to="/"><img src={Logo} alt="Logo Financ"/></Link></li>
                    <li><Link to="/Sobre">{this.props.btn1}</Link></li>
                    <li><Link to="/Contato">{this.props.btn2}</Link></li>
                    <li className="borda"><Link to="/Login">{this.props.btn3}</Link></li>
                    <li className="borda"><Link to="/Cadastro">{this.props.btn4}</Link></li>
                </ul>                
            </div>
        );
    }
}

export default NavBar;