import React from 'react';
import { DefaultContext } from 'react-icons';
import './DivBranca.css';
import { Link } from 'react-router-dom';

function DivBranca(){
    return(
        <div className="DivBranca">
            <h2>Login</h2>
            <form className="LoginForm">
                <input type="text" placeholder="RA"/>
                <input type="password" placeholder="Senha"/>
            </form>
            <div className="CheckboxLogin">      
                <input type="checkbox" id="MostrarSenha" name="vehicle1" value="Bike"/>
                <label for="vehicle1">Mostrar Senha</label>
            </div>   
            <button type="submit" className="buttonLogar"><Link style={{ textDecoration: 'none', color: 'unset'}} to="/Inicial">Logar</Link></button>
        </div>
    );
}

export default DivBranca;