import React from 'react';

import './Button.css'

function Button(props){
    return(
        <div id="box-input">
            <input id="contato" required="require"></input>
            <label>{props.name}</label>
        </div>
    );
}

export default Button;