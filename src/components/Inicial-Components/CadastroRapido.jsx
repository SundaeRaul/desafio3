import React from "react";
import "./CadastroRapido.css";
import circle from '../../icons/add-circle-outline.svg';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";

function CadastroRapido(){
    return(
        <div className="CadastroRapido">
            <h1 className="TitleCadastro"> Cadastro Rápido </h1>
            <div className="IconsCardBranco">
                <AiOutlinePlusCircle size="60px" className="plus"/>
                <AiOutlineMinusCircle size="60px" className="minus"/>
            </div>
            <div className="Receiadespesa">
                <h2 className="classificaçao"> Receita</h2>
                <h2 className="classificaçao"> Despesa</h2>
            </div>
        </div>
    )

}

export default CadastroRapido;