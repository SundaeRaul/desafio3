import React from 'react';
import './Login-Verde.css';
import Text from "./CompAninhado";

function DivVerde(){
    return (
        <div className="verde">
            <h2>Bem-vindo (a), Estudante!</h2>
                <Text/>
                <input type="button" className="Cadastro" value="Cadastre-se!" />            
         </div> 
    );
}

export default DivVerde;