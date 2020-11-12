import React from 'react';

import './Form.css'
import './media.css';

import Input from './Input';

function Form(){
    return(
        <form className="ContactForm">
            <Input name="Nome"/>
            <Input name="E-mail"/>
        </form>
    );
}

export default Form;