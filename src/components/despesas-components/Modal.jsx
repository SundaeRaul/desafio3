import React, { useState } from 'react';

import './Modal.css';

// import './jsjs';

export const Modal = ({ show, closeModalHandler }) => {


    return (
        <div className="modal"
        style={{
            display: show ? 'flex' : 'none'
        }}>
            <div id="modalContainer">
                <div id="fechar" onClick={closeModalHandler}>+</div>
                <div id="headerModal"><h3>Despesas</h3></div>

                <form>
                    <div className="input-despesas">
                    <label className="input-label">Nome</label>
                    <input className="form-despesas" type="text" placeholder="Nome" required="required"/>
                    </div>

                    <div className="input-despesas">
                        <label className="input-label">Preço</label>
                        <input className="form-despesas" type="number" placeholder="Preço" required="required"/><br/>
                    </div>

                    <div className="input-despesas">
                        <label className="input-label">Categoria</label>
                        <select required="required">
                            <option selected="selected" value="">Categoria</option>
                            <option value="1">Educação</option>
                            <option value="1">Energia</option>
                            <option value="1">Outro</option>
                        </select>
                    </div>

                    <div className="input-despesas">
                        <label className="input-label">Data</label>
                        <input className="form-despesas" type="date" placeholder="Data" required="required"/>
                    </div>

                    <div className="input-despesas">
                        <label className="input-label">Descrição</label>
                        <textarea id="descricao" placeholder="Descrição"></textarea>
                    </div>

                    <button type="submit" id="enviarDespesa">Adicionar</button>


                </form>
            </div>
        </div>  
    )
  
};

export default Modal;
