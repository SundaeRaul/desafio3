import React from "react";
import "./BalançoGeral.css";

function Balanço(){
    return(
        <div className="CardVerde">
            <h2 className="NomePessoa"> Olá, (nome) </h2>
            <h1 className="Saudo"> R$ (valor) </h1>
            <h3 className="Balanço"> Balanço geral </h3>
        </div>
    )

}

export default Balanço;