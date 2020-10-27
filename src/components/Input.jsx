import React from 'react';

import './Input.css'

function Input(props){
    return(
        <div id="box-input">
            <input id="contato" required="require"></input>
            <label>{props.name}</label>
        </div>
    );
}

export default Input;