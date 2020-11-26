import React from 'react';
import './ListaDados.css';
import data from '../../JSON/receitas.json';

function ListaDados() {
    return(
        <div>
            <table> 
                <tr> 
                    <th>Descrição</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                {data.receitas.map(income => {
                    return(
                        <tr key={income.id}>
                            <td>{income.descricao}</td>
                            <td>{income.valor}</td>
                            <td>{income.categoria}</td>
                            <td>{income.data}</td>
                        </tr>
                    )
                })}
                
            </table>
        </div>
    );
}

export default ListaDados;

{/* <table> 
<tr> 
<th>Descrição</th>
<th>Valor</th>
<th>Categoria</th>
<th>Data</th>
</tr>
<tr>
<td>{dados.descricao}</td>
<td>{dados.valor}</td>
<td>{dados.categoria}</td>
<td>{dados.data}</td>
</tr>
</table>  */}