import React from 'react';
import './DivVerde.css';

function DivVerde(){
    return(
        <div className="DivVerde">
            <h2>Bem-vindo (a), Estudante!</h2>
            <p>Insira seus dados e começe a controlar suas finanças!</p>
            <input type="button" id="Cadastro" value="Cadastre-se!"/>
        </div>
    );
}

export default DivVerde;
