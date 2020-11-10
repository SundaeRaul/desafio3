import React from 'react';
import DivBranca from '../components/Login-components/DivBranca';
import DivVerde from '../components/Login-components/DivVerde';
import '../styles/Login.css';

function Login() {
   return(
      <div className="corpo">
         <div id="container">
            <div id="box">
               <DivBranca label="Mostrar Senha"/>
               <DivVerde/>
            </div>   
         </div>
      </div>
      
   );
}

export default Login;