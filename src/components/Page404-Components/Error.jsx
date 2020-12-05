import React from 'react';
import './error.css'
import PageNotFound from '../../icons/pagenotfound.svg';
import picError from '../../icons/picError.svg'

class Error extends React.Component {
    render() {
        return (
            <div id="geral">
                <img classname="figErro" src={picError} alt="Erro 404"/>
                <div className="errorWrapper">
                    <span className="erroTexto">Erro 404:</span>
                    <span className="textoErro"><i>Despesa não encontrada</i></span>
                </div>
                
            </div>
        );
    };
}

export default Error;