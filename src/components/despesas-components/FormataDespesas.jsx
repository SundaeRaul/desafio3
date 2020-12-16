import React from 'react';

import './FormataDespesas.css'

import Data from '../../JSON/despesas.json';

var valor = 0;

function FormataDespesas({despesas}) {
  return(
    <>
      <table>
        { despesas.map(post => {
            return(
              <>
                <tr>
                    <td className="titulo">{ post.titulo }</td>
                    <td className="valor">{ post.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</td>
                    <td className="categoria">{ post.categoria }</td>
                    <td className="data">{ post.data}</td>
                    <td className="descricao">{ post.descricao }</td>
                </tr>
              </>
            )
        }) }
      </table>
    </>
   );
}

export default FormataDespesas;