import React from 'react';
import '../styles/Movimentacao.css';
import DivTopo from '../components/Movimentação-Components/DivTopo';
import Navegaçao from '../components/Receitas-components/Navegacao';

function Movimentacao(){
    return (
        <>
            <Navegaçao />
            <div id="Movimentacao">
                <DivTopo />
            </div>
        </>
    );
}

export default Movimentacao;