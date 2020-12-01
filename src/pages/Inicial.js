import React from 'react';
import '../styles/Inicial-estilo.css';
import Navegacao from '../components/Receitas-components/Navegacao';
import Balanço from '../components/Inicial-Components/BalaçoGeral';
import CadastroRapido from '../components/Inicial-Components/CadastroRapido';
import ContasAPagar from '../components/Inicial-Components/Pagar';
import ContasAReceber from '../components/Inicial-Components/Receber';
import MesAtual from '../components/Inicial-Components/MesAtual';


function Inicial(){
    return(
        <> 
            <Navegacao/>
            <div className="containerGeral">
                <div className="containerTopo">
                    <Balanço/>
                    <CadastroRapido/>
                </div>
                <div className="containerMeio">
                    <ContasAPagar/>
                    <ContasAReceber/>
                </div>
                <div className="containerBaixo">
                    <MesAtual/>
                </div>
            </div>
        </>
    );
}

export default Inicial;