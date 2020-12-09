import React from "react";
import './ListaDados.css';
import LabelReceitas from "./LabelReceitas";

function ListaDados({receitas}) {
  const formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };
  return (
    <div>
      <table className="recTabela">
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
          {receitas.map((income) => {
            return (
              <tr key={income.nm}>
                <td>{income.titulo}</td>
                <td>{income.valor?.toLocaleString("pt-BR", formato)}</td>

                <td>
                  <LabelReceitas categoria={income.categoria} />
                </td>

                <td>{income.data}</td>
                <td>{income.descricao}</td>
              </tr>
            );
          })}
          {!receitas.length && <tr>
            <td colSpan="5">Sem movimentações no momento</td>
          </tr>}
        </thead>
      </table>
    </div>
  );
}

export default ListaDados;
