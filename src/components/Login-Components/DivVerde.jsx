import React from 'react';
import './DivVerde.css';

function DivVerde(){
    return (
        <div className="verde">
            <h2>Bem-vindo (a), Estudante!</h2>
                <p>Comece a controlar suas finanças!</p>
                <input type="button" className="Cadastro" value="Cadastre-se!" />            
         </div> 
    );
}

export default DivVerde;