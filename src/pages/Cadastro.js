import React from  'react'
import '../styles/Cadastro.css'
import DivVerdeCadastro from '../components/Cadastro-Components/Verde-components'
import DivBrancaCadastro from '../components/Cadastro-Components/Branco-components'
import MainLogo from '../components/Login-components/MainLogo';


function Cadastro () {
    return(
        <div className="corpoCadastro">
            <MainLogo />
            <div id="BoxCadastro">
                <DivVerdeCadastro />
                <DivBrancaCadastro />
            </div>
        </div>
    );
}

export default Cadastro;
