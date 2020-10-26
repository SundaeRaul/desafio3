import React from 'react';

import './Form.css'
import Button from './Button'

function Form(){
    return(
        <form>
            <Button name="Nome"/>
            <Button name="E-mail"/>
        </form>
    );
}

export default Form;