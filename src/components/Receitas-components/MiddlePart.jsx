import React from "react";
import TotalMensal from '../Receitas-components/TotalMensal';
import "../Receitas-components/MiddlePart.css";
import { PieChart } from "react-minimal-pie-chart";
import data from '../../JSON/receitas.json'

class MiddlePart extends React.Component {
  render() {
    return (
      <div className="middlePartWrapper">
        <div id="middlePartContent">
          <div className="middlePartLeft">
            <span className="middlePartTitle"><strong>Total mensal de receitas</strong></span>
            <span className="middlePartValue"><strong><TotalMensal /></strong></span>
          </div>
          <div className="middlePartRight">
            <PieChart
              className="piegraph"
              data={[
                { title: "Salário", value: 1300.00, color: "#247BA0" },
                { title: "Comissões", value: 250.00, color: "#70C1B3" },
                { title: "Empréstimo", value: 150.00, color: "#EFF1C5" },
                {
                  title: "Rendimentos Tesouro Selic",
                  value: 75.00,
                  color: "#CAB1BD",
                },
              ]}
            />
          </div>
        </div>        
      </div>
    );
  }
}

export default MiddlePart;
