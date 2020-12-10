import React, { useState } from "react";
import "../styles/receitas-estilo.css";
import '../components/Receitas-components/ListaDados.css';
import Navegacao from "../components/Receitas-components/Navegacao";
import UpperPart from "../components/Receitas-components/UpperPart";
import MiddlePart from "../components/Receitas-components/MiddlePart";
import { ModalReceitas } from "../components/Receitas-components/ModalReceitas";
import ListaDados from "../components/Receitas-components/ListaDados";
import data from '../JSON/receitas.json';

function Receitas() {
  const [show, setShow] = useState(false);

  const [receitas, setReceitas] = useState(data.receitas);

  const closeModalHandler = () => setShow(false);

  const addReceita = (novaReceita) => {
    if(novaReceita && novaReceita.valor) {
      setReceitas([...receitas, {
        ...novaReceita, 
        "nm": receitas.length + 1
      }]); 
    }
    
    setShow(false);
  }

  return (
    <div className="total">
      <Navegacao />
      <UpperPart showModal={() => setShow(true)} />
      <MiddlePart receitas={receitas} />
      <div className="btm-part">
        <ListaDados receitas={receitas} />
      </div>
      <ModalReceitas show={show} closeModalHandler={addReceita} />
    </div>
  );
}

export default Receitas;
