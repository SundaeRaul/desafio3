import React, { useState } from "react";
import "./UpperPart.css";
import ModalReceitas from "../Receitas-components/ModalReceitas";
import '../Receitas-components/ModalReceitas.css';
import calendar from "../../icons/calendar-clear-outline.svg";
import print from "../../icons/print-outline.svg";
import circle from "../../icons/add-circle-outline.svg";

function UpperPart() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="upperPart">
      <span className="titulo">Receitas</span>
      <div className="bloco-bco">
        <div className="retangulo1">
          <img className="icone-botao" src={circle} alt="" />
          <a href="#" onClick={() => setIsModalVisible(true)}>
            <span>Nova transação</span>
          </a>
          {isModalVisible ? (
            <ModalReceitas onClose={() => setIsModalVisible(false)}>
              <h2>Recebimento</h2>
              <label htmlFor="nomeRec">Nome *</label>
              <input type="text" name="nomeRec" id="nomeRec" />
              <label htmlFor="valorRec">Valor *</label>
              <input type="text" name="valorRec" id="valorRec" />
              <label htmlFor="categoriaRec">Categoria *</label>
              <input type="text" name="categoriaRec" id="categoriaRec" />
              <label htmlFor="dataRec">Data *</label>
              <input type="date" name="dataRec" id="dataRec" />
              <label htmlFor="descricaoRec">Descrição</label>
              <input type="text" name="descricaoRec" id="descricaoRec" />
              <button type="submit">Adicionar</button>
            </ModalReceitas>
          ) : null}
        </div>
        <div className="retangulo2">
          <img className="icone-botao" src={print} alt="" />
          <a href="#">
            <span>Baixar relatório de entradas</span>
          </a>
        </div>
        <div className="retangulo3">
          <img className="icone-botao" src={calendar} alt="" />
          <a href="#">
            <span>Filtrar por data</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpperPart;
