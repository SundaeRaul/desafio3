import React from 'react';

import './FormataDespesas.css'

import Data from '../../JSON/despesas.json';

function FormataDespesas() {
  return(
      <table>
        { Data.map(post => {
            return(
              <>
                <tr>
                    <td className="descricao">{ post.descricao }</td>
                    <td className="valor">{ post.valor }</td>
                    <td className="data">{ post.data }</td>
                </tr>
              </>
            )
        }) }
      </table>
   );
}

export default FormataDespesas;