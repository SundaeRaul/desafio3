import React from 'react';
import DivBranca from '../components/Login-Components/DivBranca'
import DivVerde from '../components/Login-Components/DivVerde'
import MainLogo from '../components/Login-Components/MainLogo';
import '../styles/Login.css';

function Login() {
   return(
      <div className="Login">
         <MainLogo />
         <div id="box">
               <DivBranca label="Mostrar Senha"/>
               <DivVerde/>
         </div>   
      </div>
   );
}

export default Login;