import React from 'react';

import './MiddleWrapper.css';

import Media from './Media';

// import Grafico from '../../images/grafico-de-pizza.png';
import Grafico from './Grafico';
function MiddleWrapper({despesas}) {
  return(
    <div id="middlewrapper">
        <div id="media">
            <h2>Média mensal</h2>
            <Media />
        </div>
        <div id="chart-container">
          <Grafico height="200" width="400" despesas={despesas}/>
          {/* <img src={Grafico}></img> */}
        </div>
    </div>
  );
}


export default MiddleWrapper;