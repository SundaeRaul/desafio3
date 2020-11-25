import React from 'react';
import '../styles/Movimentacao.css'
import Navegacao from '../components/Receitas-components/Navegacao';
import Bloco from '../components/Movimentacao-components/Bloco';


function Movimentacao(){
    return(
        <>
            <Navegacao/>
            <div className="Movimentacao">
                <Bloco/>
            </div>
        </>
    );
}

export default Movimentacao;