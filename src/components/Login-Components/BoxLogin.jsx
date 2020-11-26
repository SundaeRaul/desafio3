import React from "react";
import "./BoxLogin.css";
import DivBranca from "./DivBranca";
import DivVerde from "./DivVerde"

function BoxLogin (){
    return(
        <div className="BoxCadastro">
            <DivBranca label="mostrar Senha"/>
            <DivVerde/>
        </div>
    );
}

export default BoxLogin;