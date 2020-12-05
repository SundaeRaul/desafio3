import React from 'react';

import './Wrapper.css';

import ButtonContainer from './ButtonContainer';
import MiddleWrapper from './MiddleWrapper';
import DespesasMensais from './DespesasMensais';


function Wrapper({ setShow }, {despesas}) {
  return(
      <div id="wrapper">
        <ButtonContainer setShow={setShow}/>
        <MiddleWrapper />
        <DespesasMensais despesas={despesas} />


      </div>
  );
}

export default Wrapper;