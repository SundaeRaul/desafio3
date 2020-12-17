import React from 'react';
import '../styles/Login.css';
import BoxLogin from '../components/Login-Components/BoxLogin'
import Logo from "../images/logo2.png"
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div id="Login">
            <Link to="/" title="FinanC" style={{textDecoration: 'none', color:'none'}}>
                <img className="LogoLogin" src={Logo}/>
            </Link>
            <BoxLogin />
        </div>
    );
}

export default Login;