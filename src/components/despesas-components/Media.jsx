import React from 'react';

import Data from '../../JSON/despesas.json';
import './Media.css';

function Media() {

    var total = 0;
    var soma = 0;
    var media = 0;
    
    Data.map(post => {
        soma += parseFloat(post.valor)
        total += 1
    })

    media = soma / total

  return(
    <p id="mediaMensal">        
        {media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
    </p>
   );
}

export default Media;