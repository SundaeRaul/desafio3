import React from 'react';
import './DivBrancaLogin.css';

function DivBrancaLogin (){
    return (
        <div id="DivBrancaLogin">
            <h1>Login</h1>
            <form className="FormLogin">
                <div className="inputsLogin">
                    <input className="inputlogin" type="text" placeholder="Email"/>
                    <input className="inputlogin" type="password" placeholder="Senha"/>
                </div>
                <div className="checkboxLogin">
                    <input className="inputcheckbox" type="checkbox"/>
                    <label>Mostrar Senha</label>
                </div>
                <button className="buttonlogin">Logar</button>
            </form>
        </div>
    );
}

export default DivBrancaLogin;