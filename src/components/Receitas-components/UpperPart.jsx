import React from 'react';
import './UpperPart.css';
import calendar from '../../icons/calendar-clear-outline.svg';
import print from '../../icons/print-outline.svg';
import circle from '../../icons/add-circle-outline.svg';

class UpperPart extends React.Component {
    render() {
        return (
            <div className="upperPart">
                <span className="titulo">Receitas</span>
                <div className="bloco-bco">
                    <div className="retangulo1">
                        <img className="icone-botao" src={circle} alt="" />
                            <a href="#">
                                <span>Nova transação</span>
                            </a>
                    </div>
                    <div className="retangulo2">
                        <img className="icone-botao" src={print} alt="" />
                            <a href="#">
                                <span>Baixar relatório de entradas</span>
                            </a>
                    </div>
                    <div className="retangulo3">
                        <img className="icone-botao" src={calendar} alt="" />
                            <a href="#">
                                <span>Filtrar por data</span>
                            </a>
                    </div>
                </div>
            </div>
        );
    };
}

export default UpperPart;