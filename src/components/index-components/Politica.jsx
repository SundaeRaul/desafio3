import React from 'react';
import './Politica.css';

class Politica extends React.Component {
    render(){        
        return(
            <div className="rodape">
                <span><a href="#">Política de Privacidade</a></span> |
                <span><a href="#"> Termos de Uso</a></span>
            </div>
        );
    }
    
}

export default Politica;