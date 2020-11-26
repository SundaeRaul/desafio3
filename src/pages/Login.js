import React from 'react';
import BoxLogin from '../components/Login-Components/BoxLogin';
import MainLogo from '../components/Login-Components/MainLogo';
import '../styles/Login.css';

function Login() {
   return(
      <div className="Login">
         <MainLogo />
         <BoxLogin />
      </div>
   );
}

export default Login;