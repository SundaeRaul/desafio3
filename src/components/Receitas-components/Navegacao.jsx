import React, { Component } from 'react';
import logo2 from '../../images/logo2.png';
import menu from '../../icons/menu-sharp.svg';
import './Navegacao.css';

class Navegacao extends React.Component {
    render() {
        return (
            <div className="navbar">
                <a href="#" className="linkmenu"><img className="menu" src={menu} alt="" /></a>
                <img className="logo" src={logo2} alt="" />
                
            </div>
        );
    };
}

export default Navegacao;