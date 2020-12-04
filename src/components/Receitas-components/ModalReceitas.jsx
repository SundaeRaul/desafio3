import React, { useState } from "react";
import "./ModalReceitas.css";

export const ModalReceitas = ({ id="modalReceitas", show, closeModalHandler }) => {

  const handleOutsideClick = (e) => {
    if(e.target.id === id) closeModalHandler();
  }

  return (
    <div
      id={id}
      onClick={handleOutsideClick}
      className="modalreceitas"
      style={{
        display: show ? "block" : "none"
      }}
    >
      <div className="modalreceitas-wrapper">
        <div className="modareceitas-header">
          <p><strong>Recebimentos</strong></p>
          <div className="modalreceitas-fechar" onClick={closeModalHandler}>
            x
          </div>
        </div>
        <form action="">
            <div className="modalreceitas-row">
                <div className="modalreceitas-rowitem">
                    <label htmlFor="">Nome:</label>
                    <input type="text" placeholder="Nome" required="required"/></div>
                <div className="modalreceitas-rowitem">
                    <label htmlFor="">Valor:</label>
                    <input type="number" placeholder="R$" required="required" name="" id=""/>
                </div>               
                </div>
            <div className="modalreceitas-row">
                <div className="modalreceitas-rowitem">
                    <label htmlFor="">Categoria:</label>
                    <select required="required">
                        <option>Selecionar</option>
                        <option value="1">Remuneração</option>
                        <option value="2">Investimentos</option>
                        <option value="3">Outros</option>
                    </select>
                </div>
                <div className="modalreceitas-rowitem">
                    <label htmlFor="">Data:</label>
                    <input type="date" name="" id=""/>
                </div>              
            </div>
            <div className="modalreceitas-row">
                <div className="modalreceitas-rowitem">
                    <label htmlFor="">Descrição:</label>
                    <input type="text" placeholder="Descrição" name="" id=""/>
                </div>
                <div className="modalreceitas-rowitem">
                    <button type="submit">Adicionar</button>
                </div>              
            </div>
        </form>
        
        
      </div>
    </div>
  );
};
