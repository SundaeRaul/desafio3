import React, { useState } from 'react';

import listDespesas from '../JSON/despesas.json';


import '../styles/despesas.css';

import Header from '../components/Receitas-components/Navegacao';
import Modal from '../components/despesas-components/Modal';
import ButtonContainer from '../components/despesas-components/ButtonContainer';
import MiddleWrapper from '../components/despesas-components/MiddleWrapper';
import DespesasMensais from '../components/despesas-components/DespesasMensais';

function Despesas(){

    const [show, setShow] = useState(false);

    const close = () => setShow(false);

    const [despesas, setDespesas] = useState(listDespesas);

    const addDespesa = (data) => {
        setDespesas([...despesas, data])
        setShow(false);
    };


    return(
        <div id="despesas">
            <Header />
            <div id="wrapper">
                <ButtonContainer setShow={setShow}/>
                <MiddleWrapper despesas={despesas}/>
                <DespesasMensais despesas={despesas} />
            </div>

            <Modal show={show} close={close} addDespesa={addDespesa} />

            
        </div>
    );
}

export default Despesas;