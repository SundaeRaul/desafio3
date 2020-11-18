import React from 'react';

import { MdAddCircleOutline, MdPrint } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import './ButtonContainer.css';

// import Button from './Button';

function ButtonContainer() {
  return(
    <div id="ButtonContainer">

          
        <button className="despesa-botao">
          <MdAddCircleOutline />
          <span>Nova transação</span>
        </button>

        <button className="despesa-botao"><MdPrint /><span>Baixar relatório de despesas</span></button>

        <button className="despesa-botao"><FaRegCalendar /><span>DD/MM/AAAA</span></button>

    </div>
  );
}

export default ButtonContainer;