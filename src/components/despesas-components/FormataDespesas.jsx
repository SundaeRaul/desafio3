import React from 'react';

import './FormataDespesas.css'

import Data from '../../JSON/despesas.json';

var valor = 0;

function FormataDespesas({despesas}) {
  return(
    <>
      <table>
        { Data.map(post => {
            return(
              <>
                <tr>
                    <td className="descricao">{ post.descricao }</td>
                    <td className="valor">{ parseFloat(post.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</td>
                    <td className="categoria">{ post.categoria }</td>
                    <td className="data">{ post.data}</td>
                </tr>
              </>
            )
        }) }
      </table>
    </>
   );
}

export default FormataDespesas;