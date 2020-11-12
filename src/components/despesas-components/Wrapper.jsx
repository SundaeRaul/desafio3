import React from 'react';

import './Wrapper.css';

import ButtonContainer from './ButtonContainer';
import MiddleWrapper from './MiddleWrapper';
import DespesasMensais from './DespesasMensais';


function Wrapper() {
  return(
      <div id="wrapper">
        <ButtonContainer />
        <MiddleWrapper />
        <DespesasMensais />

      </div>
  );
}

export default Wrapper;