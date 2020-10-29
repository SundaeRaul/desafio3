import React from 'react';
import './Login-Branco.css';



 function DivBranca () {
    return (
            <div class="branco">
               <h2>Login</h2>
               <form>
                  <input type="text" placeholder="RA"/>
                  <input type="password" placeholder="Senha"/>
               </form>
                  
               <input type="checkbox" id="MostrarSenha" name="vehicle1" value="Bike"/>
               <label for="Senha">Mostrar Senha</label>
               
               <button type="submit" class="button">Logar</button>
            </div>
      );
}

export default DivBranca;
 


