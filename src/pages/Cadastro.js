import React from  'react';
import '../styles/Cadastro.css';
import DivVerdeCadastro from '../components/Cadastro-Components/Verde-components';
import DivBrancaCadastro from '../components/Cadastro-Components/Branco-components';

function Cadastro () {
    return(
        <div className="corpoCadastro">
            <div className="BoxCadastro">
                <DivVerdeCadastro />
                <DivBrancaCadastro />
            </div>
        </div>
    );
}

export default Cadastro;
