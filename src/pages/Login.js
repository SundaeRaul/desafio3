import React from 'react';
import Logo from '../images/logo2.png';
import '../styles/Login.css';
import {Link} from 'react-router-dom';
import DivBrancaLogin from '../components/Login-Components/DivBrancaLogin';

function Login (){
    return(
        <div id="PaginaLogin">
            <Link className="LinkLogo" to="/Home"><img className="LogoLC" src={Logo}/></Link>
            <div className="BoxLogin">
                <DivBrancaLogin />
            </div>
        </div>
    );
}

export default Login;