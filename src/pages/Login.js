import React from 'react';
import DivBranca from'../components/Login-Components/Login-Branco';
import DivVerde from'../components/Login-Components/Login-Verde';
import '../styles/Login.css';



function Login(){
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
