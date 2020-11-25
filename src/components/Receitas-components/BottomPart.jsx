import React from 'react';
import './BottomPart.css';

class BottomPart extends React.Component {
    render() {
        return(
            <div className="btm-part">
                <div className="cabecalho">
                    <span>Descrição</span>
                    <span>Valor</span>
                    <span>Categoria</span>
                    <span>Data</span>
                </div>
                <hr id="linha-header"></hr>
                <div className="dados">
                    <span>Salário</span>
                    <span>R$ 880,00</span>
                    <span>Remuneração</span>
                    <span>05/09/2020</span>
                </div>
            </div>
        );
    };
}

export default BottomPart;