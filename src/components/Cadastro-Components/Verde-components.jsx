import React from 'react';
import './Verde-components.css';

function DivVerdeCadastro (){
    return (
        <div className="VerdeCadastro">
            <h2>Bem-vindo (a), Estudante!</h2>
            <p>Ja possui conta? Faça seu login!</p>
           <input type="button" id="Cadastro" value="Login"/>
        </div>
    );
}

export default DivVerdeCadastro;

