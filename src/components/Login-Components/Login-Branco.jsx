import React from 'react';
import './Login-Branco.css';

 function DivBranca (props) {
    return (
            <div class="branco">
               <h2>Login</h2>
               <form className="ParteSup">
                  <input className="LoginForm" type="text" placeholder="RA"/>
                  <input className="LoginForm" type="password" placeholder="Senha"/>
               </form>
               <div class="MostrarSenha">
                  <input className="Checkbox" type="checkbox" />
                  <label className="TextoSenha" for="Senha">{props.label}</label>
               </div>
                              
               <button type="submit" class="button">Logar</button>
            </div>
      );
}

export default DivBranca;