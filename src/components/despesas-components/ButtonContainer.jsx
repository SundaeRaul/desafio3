import React from 'react';

import './ButtonContainer.css';

import Button from './Button';

function ButtonContainer() {
  return(
    <div id="ButtonContainer">
        <Button buttontext="Nova transação"/>
        <Button buttontext="Baixar relatório de despesas"/>
        <Button buttontext="DD/MM/AAAA"/>
    </div>
  );
}

export default ButtonContainer;