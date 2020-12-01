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
            <div className="Checkbox">      
                <input type="checkbox" id="MostrarSenha" name="vehicle1" value="Bike"/>
                <label for="vehicle1">Mostrar Senha</label>
            </div>   
            <Link to="/Login"><button type="submit" className="buttonLogar">Logar</button></Link>
        </div>
    );
}

export default DivBranca;