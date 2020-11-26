import React, { useState } from 'react';


import '../styles/despesas.css';

import Header from '../components/despesas-components/Header';
import Wrapper from '../components/despesas-components/Wrapper';
import Modal from '../components/despesas-components/Modal';

function Despesas(){

    const [show, setShow] = useState(false);

    const close = () => setShow(false);

    return(
        <div id="despesas">
            <Header />
            <Wrapper setShow={setShow}/>

            <Modal show={show} close={close} />
        </div>
    );
}

export default Despesas;