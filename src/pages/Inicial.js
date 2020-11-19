import React from 'react';
import Balanço from '../components/Inicial-Components/BalaçoGeral';
import Navegacao from '../components/Receitas-components/Navegacao';
import '../styles/Inicial-estilo.css'

function Inicial(){
    return(
        <>
        <Navegacao/>
            <div className="corpo">
                <Balanço/>
            </div>
        </>
    );
}

export default Inicial;