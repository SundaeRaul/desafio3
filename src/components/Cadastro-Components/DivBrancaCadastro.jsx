import React from 'react';
import './DivBrancaCadastro.css';
import { Link } from 'react-router-dom';

function DivBrancaCadastro(){
    return(
        <div className="DivBrancaCadastro">
            <h2>Cadastre-se!</h2>
            <form className="CadastroForm">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="RA"/>
                <input type="password" placeholder="Senha"/>
                <input type="passowrd" placeholder="Repetir Senha"/>
             </form>

             <button type="submit" classname="Cadastrarse"><Link style={{ textDecoration: 'none', color: 'unset'}} to ="/Inicial">Cadastrar-se</Link></button>
        </div>
    );
}

export default DivBrancaCadastro;