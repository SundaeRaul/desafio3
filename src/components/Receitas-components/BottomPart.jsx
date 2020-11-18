import React from 'react';
import './BottomPart.css';
// import Receitas from './Receitas';

class BottomPart extends React.Component {
    render() {
        return(
            <div className="btm-part">
                <div className="cabecalho">
                    <span>Fonte</span>
                    <span>Valor</span>
                    <span>Data</span>
                </div>
                <hr />
                <div className="dados">
                    <span>Salário</span>
                    <span>R$ 880,00</span>
                    <span>05/09/2020</span>
                    {/* <Receitas /> */}
                </div>
            </div>
        );
    };
}

export default BottomPart;