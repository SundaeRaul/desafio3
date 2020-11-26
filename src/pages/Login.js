import React from 'react';
import BoxLogin from '../components/Login-components/BoxLogin';
import MainLogo from '../components/Login-components/MainLogo';
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