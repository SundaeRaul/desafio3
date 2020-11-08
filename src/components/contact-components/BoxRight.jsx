import React from 'react';

import './BoxRight.css';

function BoxRight(){
    return(

        <div id="mensagem" className="animate-right">
            <textarea placeholder="Mensagem"></textarea>
            <button id="enviar">Enviar mensagem</button>
        </div>

    );
}

export default BoxRight;