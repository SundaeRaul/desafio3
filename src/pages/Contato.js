import React from 'react';

import { Link } from 'react-router-dom';

import Form from '../components/Form'

function Contato(){
    return(
        <div>
            <Form/>

            <p>
                <Link to="/">Voltar para a pagina inicial</Link>
            </p>
        </div>
    );
}

export default Contato;