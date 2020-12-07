import React from "react";
import "./ListaDados.css";
import data from "../../JSON/receitas.json";
import LabelReceitas from "./LabelReceitas";

function ListaDados() {
  const formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };
  const Categoria = data.receitas.categoria;
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
          {data.receitas.map((income) => {
            return (
              <tr key={income.nm}>
                <td>{income.titulo}</td>
                <td>{income.valor.toLocaleString("pt-BR", formato)}</td>

                <td>
                  <LabelReceitas categoria={income.categoria} />
                </td>

                <td>{income.data}</td>
                <td>{income.descricao}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}

export default ListaDados;
