import React from 'react';
import './DivVerde.css';

function DivVerde(){
    return(
        <div className="DivVerde">
            <div className="TextDivVerde">
                <h2>Bem-vindo (a), Estudante!</h2>
                <p>Insira seus dados e começe a controlar suas finanças!</p>
            </div>
                
            <button type="submit" className="buttonCadastro">Cadastre-se!</button>
        </div>
    );
}

export default DivVerde;
