import React from 'react';
import './DivVerde.css';
import { Link } from 'react-router-dom';

function DivVerde(){
    return(
        <div className="DivVerde">
            <div className="TextDivVerde">
                <h2>Bem-vindo (a), Estudante!</h2>
                <p>Insira seus dados e começe a controlar suas finanças!</p>
            </div>
                
            <button type="submit" className="buttonCadastro"><Link to ="/Cadastro" style={{ textDecoration: 'none', color: 'unset'}}>Cadastre-se!</Link></button>
        </div>
    );
}

export default DivVerde;
