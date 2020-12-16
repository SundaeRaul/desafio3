import React from 'react';

import { Link } from 'react-router-dom';

import Logo from '../images/logo2.png';


import './Header.css';

function Header(){
    return(
        <header>

            <nav id="navbar">
                <div className="logo-navbar">
                        menuClassName={"menuReceitas"}
                        itemListClassName={"menuReceitas-listaItem"}
                    <Link to="/" title="FinanC">
                        <img src={ Logo } alt="Logo FinanC"></img>
                    </Link>
                </div>
                
            </nav>

        </header>
    );
}

export default Header;