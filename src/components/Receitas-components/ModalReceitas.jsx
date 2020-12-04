import React, { useState } from 'react';
import './ModalReceitas.css'

export const ModalReceitas = ({ show, closeModalHandler }) => {
    return (
        <div className="modalreceitas"
        style={{
                    display: show ? 'block' : 'none'
                }}
        >
            <div className="modalreceitas-wrapper">
                <div className="modareceitas-header">
                    <p>Recebimentos</p>
                    <div className="modalreceitas-fechar"
                    onClick={closeModalHandler}>x</div>
                </div>
                <div className="modalreceitas-upperpart">
                    <label htmlFor="">Name</label>
                    <input type="text"/>
                    <label htmlFor="">Valor</label>
                    <input type="number"/>
                <div className="modalreceitas-middlepart">
                    
                </div>
                    <label htmlFor="">Categoria</label>
                    <input type="text"/>
                    <label htmlFor="">Data</label>
                    <input type="date"/>
                </div>
                <div className="modalreceitas-bottompart">
                    <label htmlFor="">Descrição</label>
                    <textarea/>
                    <button>Adicionar</button>
                </div>
            </div>
        </div>
        
    );
}