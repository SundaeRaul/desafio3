import React, { useState} from 'react';

import '../styles/renderizacao.css';
import Acesa from '../images/lampada/acesa.jpg';
import Apagada from '../images/lampada/apagada.jpg';
import AreaTexto from '../components/entrega-renderizacao/AreaTexto';
import Botao from '../components/entrega-renderizacao/Botao';


export default class Renderizacao extends React.Component {

    constructor(){
        super()
        this.state = {
            lampadaAcesa: true,
            nomeBotao: 'Esconder',
            classeDiv: 'show'
        }
    }


    alterarEstado(){
        var Estado;
        var NomeBotao;
        if(this.state.classeDiv === 'show'){
            Estado = "hide";
            NomeBotao = 'Mostrar';
        }else{
            Estado = "show";
            NomeBotao = 'Esconder';
        }
        this.setState({
            nomeBotao: NomeBotao,
            classeDiv: Estado
        })

    }

    render() {

        let imagem
        if(this.state.lampadaAcesa){
            imagem = <img src={Acesa} />
        } else{
            imagem = <img src={Apagada} />
        }
    return (
        [
        imagem,
        <div>
            <AreaTexto classeSecundaria={this.state.classeDiv} texto="Clique no botão abaixo para esconder esta caixa de texto" />
            <Botao funcao={this.alterarEstado.bind(this)} valor={this.state.nomeBotao} />
        </div>
        ]
    )
    }
}
