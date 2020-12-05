import React, { useState } from 'react';
import listDespesas from '../JSON/despesas.json';

function FormTeste(){

    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [data, setData] = useState("");
    const [descricao, setDescricao] = useState("");
    const [despesas, setDespesas] = useState(listDespesas);


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


    return(
        <>
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

            <table>
            { despesas.map(post => {
                return(
                <>
                    <tr>
                        <td className="descricao">{ post.descricao }</td>
                        <td className="valor">{ parseFloat(post.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</td>
                        <td className="categoria">{ post.categoria }</td>
                        <td className="data">{ post.data}</td>
                    </tr>
                </>
                )
            }) }
            
      </table>
        </>
    );
}

export default FormTeste;