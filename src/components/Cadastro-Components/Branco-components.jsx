import React from 'react';
import './Branco-components.css';

function DivBrancaCadastro (){
    return (
        <div className="BrancoCadastro">
            <h2>Cadastre-se!</h2>
                <form>
                    <input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="RA"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="passowrd" placeholder="Repetir Senha"/>
                </form>
            <button type="submit" class="button">Cadastrar-se</button>
     </div>
    );
}

export default DivBrancaCadastro;