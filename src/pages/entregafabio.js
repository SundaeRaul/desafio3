import React from 'react';
import Fabio from '../components/Fabio';
import Botao from '../components/Botao';
import '../styles/entregafabio.css';

class entregafabio extends React.Component {
    render() {
        return (
            <div className="entregafabio">
                <Fabio />
                <Botao />
            </div>
        );
    };
}

export default entregafabio;
