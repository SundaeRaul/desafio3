import React, { useState } from 'react';

import './Modal.css';

// import './jsjs';

export const Modal = ({ show, close },{despesas, setDespesas}) => {



    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");


    function handleSubmit(event) {
        const novaDespesa = {
            preco: preco,
            categoria: categoria,
            data: data,
            descricao: descricao,
        }


        setDespesas([...despesas, novaDespesa]);

        event.preventDefault();
    }

    const handleChangePreco = (e) => {
        setPreco(e.target.value);
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
                    <label className="input-label">Preço</label>
                    <input name="preco" onChange={handleChangePreco} value={preco} className="form-despesas" type="number" placeholder="Preço" required="required"/><br/>
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
