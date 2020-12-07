import React from 'react';
import './DivVerdeCadastro.css';
import { Link } from 'react-router-dom';

function DivVerdeCadastro(){
    return(
        <div className="DivVerdeCadastro">
            <h2>Bem-vindo (a), Estudante!</h2>
            <div className="TextCadastro">
                <p>Ja possui conta? Faça seu login!</p>
            </div>
            <button type="submit" className="LogarCadastro"><Link to="/Login" style={{ textDecoration: 'none', color: 'unset'}}>Logar</Link></button>
         </div>
    );
}

export default DivVerdeCadastro;