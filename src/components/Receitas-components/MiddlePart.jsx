import React from "react";
import "../Receitas-components/MiddlePart.css";
import { PieChart } from "react-minimal-pie-chart";

class MiddlePart extends React.Component {
  render() {
    return (
      <div className="middleContainer">
        <div className="middleContainerLeft">
          <span className="tituloMiddleContainer"><strong>Média mensal</strong></span>
          <span className="valorMiddleContainer"><strong>R$ 1.775,00</strong></span>
        </div>
        <div className="middleContainerRight">
          <PieChart
            className="piegraph"
            data={[
              { title: "Salário", value: 1300, color: "#247BA0" },
              { title: "Comissões", value: 250, color: "#70C1B3" },
              { title: "Empréstimo", value: 150, color: "#EFF1C5" },
              {
                title: "Rendimentos Tesouro Selic",
                value: 75,
                color: "#CAB1BD",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default MiddlePart;
