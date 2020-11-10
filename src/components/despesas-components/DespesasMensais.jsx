import React from 'react';

import './DespesasMensais.css'

import FormataDespesas from './FormataDespesas';

function DespesasMensais() {
  return(
      <div id="DespesasMensais">
          <div id="header">
              <span><strong>Descrição</strong></span>
              <span><strong>Valor</strong></span>
              <span><strong>Data</strong></span>
          </div>
          <hr></hr>

          <div id="despesa">

            <FormataDespesas />


              {/* <div id="descricao">
                  <span>Nubank</span>
                  <span>Nubank</span>
              </div>
              <div id="valor">
                <span>R$ 171,00</span>
                <span>R$ 171,00</span>
              </div>
              <div id="data">
                <span>10/10/20</span>
                <span>10/10/20</span>
              </div> */}
          </div>
      </div>
  );
}

export default DespesasMensais;