import React from 'react';
import './Login-Branco.css';



 function DivBranca (props) {
    return (
            <div class="branco">
               <h2>Login</h2>
               <form>
                  <input className="LoginForm" type="text" placeholder="RA"/>
                  <input className="LoginForm" type="password" placeholder="Senha"/>
               </form>
                  
               <input type="checkbox" className="MostrarSenha"/>
               <label for="Senha">{props.label}</label>
               
               <button type="submit" class="button">Logar</button>
            </div>
      );
}

export default DivBranca;
 


