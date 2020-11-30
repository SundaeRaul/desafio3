import React from 'react';
import './DivVerdeCadastro.css';

function DivVerdeCadastro(){
    return(
        <div className="DivVerdeCadastro">
            <h2>Bem-vindo (a), Estudante!</h2>
            <div className="TextCadastro">
                <p>Ja possui conta? Faça seu login!</p>
            </div>
            <button type="submit" className="LogarCadastro">Logar</button>
         </div>
    );
}

export default DivVerdeCadastro;