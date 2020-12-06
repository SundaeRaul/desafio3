import React, { useState } from 'react';
import './Politica.css';

function Politica(props) {    
        return(
            <div className="rodape">
                <span><a onClick={props.showModal} href="">Política de Privacidade</a></span> |
                <span><a onClick={props.showModal} href=""> Termos de Uso</a></span>
            </div>
        );    
}

export default Politica;