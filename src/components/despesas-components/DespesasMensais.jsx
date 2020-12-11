import React from 'react';

import './DespesasMensais.css'

import FormataDespesas from './FormataDespesas';

function DespesasMensais({despesas}) {
  return(
      <div id="DespesasMensais">
          <div id="header">
              
              <div><strong>Titulo</strong></div>
              <div><strong>Valor</strong></div>
              <div><strong>Categoria</strong></div>
              <div><strong>Data</strong></div>
              <div><strong>Descrição</strong></div>
          </div>
          <hr id="header-despesas"></hr>

          <div id="despesa">

            <FormataDespesas despesas={despesas} />
            
          </div>
      </div>
  );
}

export default DespesasMensais;