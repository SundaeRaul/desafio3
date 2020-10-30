import React from 'react';
import Politica from './Politica'
import './Footer.css';

class Footer extends React.Component {
    render(){
        return(
            <div className="rodape">
                <span>
                    Copyright &copy; 2020 <strong>FinanC S/A</strong><br />  Todos os direitos reservados<br />Av. das Cataratas, 1118 – Vila Yolanda, Foz do Iguaçu – PR, 85853-000
                </span>
                <div>
                    <Politica />
                </div>
            </div>
        );
    }
}

export default Footer;