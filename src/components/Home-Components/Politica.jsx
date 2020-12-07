import React, { useState } from 'react';
import './Politica.css';

function Politica() { 
    function avisoPolitica() {
        alert('Estamos em fase de desenvolvimento de nossas políticas, que em breve estarão disponíveis. Obrigado pelo interesse!')
    }
        return(
            <div className="rodape">
                <span onClick={avisoPolitica} className="politicaLink"><a href="">Política de Privacidade</a></span> |
                <span onClick={avisoPolitica} className="politicaLink"><a href=""> Termos de Uso</a></span>
            </div>
        );    
}

export default Politica;