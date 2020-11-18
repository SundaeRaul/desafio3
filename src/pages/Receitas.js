import React from 'react';
import '../styles/receitas-estilo.css';
import Navegacao from '../components/Receitas-components/Navegacao';
import UpperPart from '../components/Receitas-components/UpperPart';
import BottomPart from '../components/Receitas-components/BottomPart';
import BarraLateral from '../components/Receitas-components/BarraLateral';

function Receitas() {
    return (
        <div className="total" id="outer-container"> 
            <BarraLateral pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <Navegacao />
                <UpperPart />
                <BottomPart />
            </div>              
            
        </div>
    );
};

export default Receitas;