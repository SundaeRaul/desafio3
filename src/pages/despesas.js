import React, { useState } from 'react';

import listDespesas from '../JSON/despesas.json';



import '../styles/despesas.css';

import Header from '../components/despesas-components/Header';
import Wrapper from '../components/despesas-components/Wrapper';
import Modal from '../components/despesas-components/Modal';

function Despesas(){

    const [show, setShow] = useState(false);

    const close = () => setShow(false);

    const [despesas, setDespesas] = useState(listDespesas);


    return(
        <div id="despesas">
            <Header />
            <Wrapper setShow={setShow} despesas={despesas}/>

            <Modal show={show} close={close} despesas={despesas} setDespesas={setDespesas}/>

            
        </div>
    );
}

export default Despesas;