import React from 'react';
import '../styles/Movimentacao.css';
import DivTopo from '../components/Movimentação-Components/DivTopo';
import Navegaçao from '../components/Receitas-components/Navegacao';
import DivLista from '../components/Movimentação-Components/DivLista';

function Movimentacao(){
    return (
        <>
            <Navegaçao />
            <div id="Movimentacao">
                <DivTopo />
                <DivLista />
            </div>
        </>
    );
}

export default Movimentacao;