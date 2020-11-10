import React from 'react';
import logo2 from '../../images/logo2.png';
import menu from '../../icons/menu-sharp.svg';
import './Navegacao.css';

class Navegacao extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="logo" src={logo2} alt="" />
                <a href="#"><img className="menu" src={menu} alt="" /></a>
            </div>
        );
    };
}

export default Navegacao;