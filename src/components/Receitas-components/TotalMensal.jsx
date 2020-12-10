import React from 'react';
import data from '../../JSON/receitas.json';

function TotalMensal() {
    let somaReceitas = data.receitas.reduce( (prevValue, objeto) => prevValue + objeto.valor, 0 )

    const formato = {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      };

    return somaReceitas?.toLocaleString("pt-BR", formato)
}

export default TotalMensal;