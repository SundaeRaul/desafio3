import React from 'react';

import './Botao.css';

export default class Botao extends React.Component{

    render(){
        return(
            <div className="DivBotao">
                <button onClick={this.props.funcao} className="Botao">{this.props.valor}</button>
            </div>
        );
    }
}