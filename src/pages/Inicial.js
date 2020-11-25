import React from 'react';
import Balanço from '../components/Inicial-Components/BalaçoGeral';
import Navegacao from '../components/Receitas-components/Navegacao';
import '../styles/Inicial-estilo.css'
import CadastroRapido from '../components/Inicial-Components/CadastroRapido'
import ContasAPagar from '../components/Inicial-Components/Pagar'
import ContasAReceber from '../components/Inicial-Components/Receber'


function Inicial(){
    return(
        <>
        <Navegacao/>
            <div className="PositionAll">
                <div className="PositionTop">
                    <Balanço/>
                    <CadastroRapido/>
                </div>
                <div className="PositionMiddle">
                <ContasAPagar/>
                <ContasAReceber/>
                
                </div>
            </div>
        </>
    );
}

export default Inicial;