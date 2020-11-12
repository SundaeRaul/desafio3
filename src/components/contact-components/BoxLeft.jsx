import React from 'react';
import './BoxLeft.css';
import './media.css';

import Form from './Form';

function BoxLeft(){
    return(
        <div id="box-left" className="animate-right">
                <h1>Contate-nos</h1><hr className="Linha" />

                <div id="formulario">

                    <Form/>

                    <input id="captcha" type="checkbox"/>
                    <span>Não sou um robô</span>

                </div>
        </div>
    );
}

export default BoxLeft;