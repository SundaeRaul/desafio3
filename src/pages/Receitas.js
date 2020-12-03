import React, { useState } from 'react';
import '../styles/receitas-estilo.css';
import Navegacao from '../components/Receitas-components/Navegacao';
import UpperPart from '../components/Receitas-components/UpperPart';
import MiddlePart from '../components/Receitas-components/MiddlePart';
import BottomPart from '../components/Receitas-components/BottomPart';
import { ModalReceitas } from '../components/Receitas-components/ModalReceitas';

function Receitas () {
    const [show, setShow] = useState(false);

    const closeModalHandler = () => setShow(false);

    return (
        <div className="total">                
            <Navegacao />
            <UpperPart setShow={setShow}/>
            <MiddlePart />
            <BottomPart />
            {/* <ModalReceitas show={show} closeModalHandler={closeModalHandler} /> */}
        </div>
    );
};

export default Receitas;