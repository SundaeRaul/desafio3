import React from 'react';
import Raul from '../components/Raul';
import DivBranca from'../components/Login-Components/Login-Branco';
import DivVerde from'../components/Login-Components/Login-Verde';
import '../styles/Login.css';



function Login(){
   return(
      <div id="container">
         <div id="box">
            <DivBranca/>
            <DivVerde/>
         </div>   
      </div>
   );
}

export default Login;
