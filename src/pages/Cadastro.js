import React from 'react';
import '../styles/Cadastro.css';
import BoxCadastro from '../components/Cadastro-Components/BoxCadastro';
import Logo from '../images/logo2.png';
import {Link} from 'react-router-dom';


function Cadastro(){
    return(
        <div id="Cadastro">
            <Link to="/" title="FinanC" style={{textDecoration: 'none', color:'none'}}>
                <img className="LogoLogin" src={Logo}/>
            </Link>
            <BoxCadastro />
        </div>
    );
}

export default Cadastro;