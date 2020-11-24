import React from 'react';
import DivBranca from '../components/Login-components/DivBranca'
import DivVerde from '../components/Login-components/DivVerde'
import MainLogo from '../components/Login-components/MainLogo';
import '../styles/Login.css';

function Login() {
   return(
      <div className="corpo">
         <MainLogo />
         <div id="box">
               <DivBranca label="Mostrar Senha"/>
               <DivVerde/>
         </div>   
      </div>
   );
}

export default Login;