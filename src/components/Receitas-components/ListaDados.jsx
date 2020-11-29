import React from "react";
import "./ListaDados.css";
import data from "../../JSON/receitas.json";

function ListaDados() {
  const formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  };
  return (
    <div>
      <table className="recTabela">
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
        {data.receitas.map((income) => {
          return (
            <tr key={income.id}>
              <td>{income.descricao}</td>
              {/* <td>R$ {income.valor.toFixed(2)}</td> */}
              <td>{income.valor.toLocaleString("pt-BR", formato)}</td>
              <td>{income.categoria}</td>
              <td>{income.data}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ListaDados;
