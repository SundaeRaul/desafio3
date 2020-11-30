import React from 'react';
import './BoxCadastro.css';
import DivVerdeCadastro from './DivVerdeCadastro';
import DivBrancaCadastro from './DivBrancaCadastro';

function BoxCadastro(){
    return(
        <div id="BoxCadastro">
            <DivVerdeCadastro />
            <DivBrancaCadastro />
        </div>
    );
}

export default BoxCadastro;