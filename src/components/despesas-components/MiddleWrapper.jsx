import React from 'react';

import './MiddleWrapper.css';

import Media from './Media';

import Grafico from '../../images/grafico-de-pizza.png';

function MiddleWrapper() {
  return(
    <div id="middlewrapper">
        <div id="media">
            <h2>Média mensal</h2>
            <Media />
        </div>
        <div id="grafico">
          <img src={Grafico}></img>
        </div>
    </div>
  );
}


export default MiddleWrapper;