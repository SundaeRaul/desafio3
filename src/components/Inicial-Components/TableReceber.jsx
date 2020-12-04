import React from 'react';
import './TableReceber.css';
import data from '../../JSON/Receber.json'

function TabelaReceber(){
    const formato={
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL"
    };
    
    return(
        <table className="tabelaReceber">
            {data.Receber.map((dados) =>{
                return (
                    <tr key={dados.id} className="TrTabelaReceber">
                            <td>{dados.descrição}</td>
                            <td>{dados.valor.toLocaleString("pt-BR", formato)}</td>
                    </tr>
                );
            })}
        </table>

    );
}

export default TabelaReceber;