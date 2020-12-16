import React, { useState } from "react";
import "./ModalReceitas.css";
import dataReceitas from "../../JSON/receitas.json";
import dataCategorias from "../../JSON/categorias.json";

export const ModalReceitas = ({
  id = "modalReceitas",
  show,
  closeModalHandler,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) closeModalHandler();
  };

  const [receitas, setReceitas] = useState(dataReceitas);
  const [nm, setNm] = useState(receitas.length + 1);
  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("Remuneração");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    const novaReceita = {
      nm: nm,
      titulo: titulo,
      valor: valor,
      categoria: categoria,
      data: data,
      descricao: descricao
    };

    closeModalHandler(novaReceita);
    console.log(novaReceita)

    // setReceitas([...receitas, novaReceita]);

    setTitulo("")
    setValor("")
    setData("")
    setDescricao("")
    /* resetar todos os outros campos*/

    event.preventDefault();

  }

  const handleChangeTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeValor = (e) => {
    setValor(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
    console.log("categoria", e.target.value);
  };

  const handleChangeData = (e) => {
    setData(e.target.value);
    console.log(e.target.value);
  };

  const handleChangeDescricao = (e) => {
    setDescricao(e.target.value);
    console.log(e.target.value);
  };

  

  return (
    <div
      id={id}
      onClick={handleOutsideClick}
      className="modalreceitas"
      style={{
        display: show ? "block" : "none",
      }}
    >
      <div className="modalreceitas-wrapper">
        <div className="modareceitas-header">
          <p>
            <strong>Recebimentos</strong>
          </p>
          <div className="modalreceitas-fechar" onClick={closeModalHandler}>
            x
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="modalreceitas-row">
            <div className="modalreceitas-rowitem">
              <label htmlFor="">Título:</label>
              <input
                onChange={handleChangeTitulo}
                value={titulo}
                type="text"
                placeholder="Título"
                required="required"
              />
            </div>
            <div className="modalreceitas-rowitem">
              <label htmlFor="">Valor:</label>
              <input
                onChange={handleChangeValor}
                value={valor}
                type="number"
                placeholder="R$"
                required="required"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="modalreceitas-row">
            <div className="modalreceitas-rowitem">
              <label htmlFor="">Categoria:</label>
              <select onChange={handleChangeCategoria} required="required" defaultValue="Remuneração">
                {/* <option>Selecionar</option> */}
                {dataCategorias.categorias.map((categoria) => {
                  return (
                    <option key={categoria.key} value={categoria.key}>{categoria.label}</option>
                    )
                })}
              </select>
            </div>
            <div className="modalreceitas-rowitem">
              <label htmlFor="">Data:</label>
              <input
                onChange={handleChangeData}
                value={data}
                type="date"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="modalreceitas-row">
            <div className="modalreceitas-rowitem">
              <label htmlFor="">Descrição:</label>
              <input
                onChange={handleChangeDescricao}
                value={descricao}
                type="text"
                placeholder="Descrição"
                name=""
                id=""
              />
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
