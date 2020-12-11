import React, { useState } from 'react';

import './Modal.css';

// import './jsjs';

export const Modal = ({ show, close, addDespesa}) => {


    const [titulo, setTitulo] = useState("");
    const [valor, setValor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");


    function handleSubmit(event) {
        const novaDespesa = {
            titulo: titulo,
            valor: valor,
            categoria: categoria,
            data: data,
            descricao: descricao,
        }


        addDespesa(novaDespesa);

        event.preventDefault();
    }

    const handleChangeTitulo = (e) => {
        setTitulo(e.target.value);
        console.log(e.target.value);
    }

    const handleChangeValor = (e) => {
        setValor(e.target.value);
        console.log(e.target.value);
    }
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value)
        console.log(e.target.value);
    }
    const handleChangeData = (e) => {
        setData(e.target.value)
        console.log(e.target.value);
    }
    const handleChangeDescricao = (e) => {
        setDescricao(e.target.value)
        console.log(e.target.value);
    }





    return (
        <div className="modal"
        style={{
            display: show ? 'flex' : 'none'
        }}>
            <div id="modalContainer">
                <div id="fechar" onClick={close}>+</div>
                <div id="headerModal"><h3>Despesas</h3></div>

                <form onSubmit={handleSubmit}>

                <div className="input-despesas">
                    <label className="input-label">Titulo</label>
                    <input name="titulo" onChange={handleChangeTitulo} value={titulo} className="form-despesas" type="text" placeholder="Titulo" required="required"/><br/>
                </div>
                
                <div className="input-despesas">
                    <label className="input-label">Preço</label>
                    <input name="preco" onChange={handleChangeValor} value={valor} className="form-despesas" type="number" placeholder="Preço" required="required"/><br/>
                </div>

                <div className="input-despesas">
                    <label className="input-label">Categoria</label>
                    <select name="categoria" onChange={handleChangeCategoria} value={categoria} required="required">
                        <option selected="selected" value="">Categoria</option>
                        <option value="1">Educação</option>
                        <option value="1">Energia</option>
                        <option value="1">Outro</option>
                    </select>
                </div>

                <div className="input-despesas">
                    <label className="input-label">Data</label>
                    <input name="data" onChange={handleChangeData} value={data} className="form-despesas" type="date" placeholder="Data" required="required"/>
                </div>

                <div className="input-despesas">
                    <label className="input-label">Descrição</label>
                    <textarea name="descricao" onChange={handleChangeDescricao} value={descricao} id="descricao" placeholder="Descrição"></textarea>
                </div>

                <button type="submit" id="enviarDespesa">Adicionar</button>


            </form>
            </div>
        </div>  
    )
  
};

export default Modal;
