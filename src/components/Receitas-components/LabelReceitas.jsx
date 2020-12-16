import React from "react";

function LabelReceitas(props) {
  switch (props.categoria) {
    case "Remuneração":
      return <span className="label-receitas remuneracao">Remuneração</span>;
    case "Investimentos":
      return (
        <span className="label-receitas investimentos">Investimentos</span>
      );
    case "Outros":
      return <span className="label-receitas outros">Outros</span>;
    default:
      return <span className="label-receitas">{props.categoria}</span>;
  }
}

export default LabelReceitas;
