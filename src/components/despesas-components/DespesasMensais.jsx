import React from 'react';

import './DespesasMensais.css'

import FormataDespesas from './FormataDespesas';

function DespesasMensais() {
  return(
      <div id="DespesasMensais">
          <div id="header">
              <div><strong>Descrição</strong></div>
              <div><strong>Valor</strong></div>
              <div><strong>Categoria</strong></div>
              <div><strong>Data</strong></div>
          </div>
          <hr></hr>

          <div id="despesa">

            <FormataDespesas />
            
          </div>
      </div>
  );
}

export default DespesasMensais;