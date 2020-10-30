import React from 'react';
import { Link } from 'react-router';
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
                    <li><a href="#">{this.props.btn1}</a></li>
                    <li><a href="#">{this.props.btn2}</a></li>
                    <li><a href="#">{this.props.btn3}</a></li>
                    <li><a href="#">{this.props.btn4}</a></li>
                </ul>                
            </div>
        );
    }
}

export default NavBar;