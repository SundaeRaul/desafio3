import React from 'react';

import './Wrapper.css';

import ButtonContainer from './ButtonContainer';
import MiddleWrapper from './MiddleWrapper';
import DespesasMensais from './DespesasMensais';


function Wrapper({ setShow }) {
  return(
      <div id="wrapper">
        <ButtonContainer setShow={setShow}/>
        <MiddleWrapper />
        <DespesasMensais />

      </div>
  );
}

export default Wrapper;