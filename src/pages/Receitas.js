import React from 'react';
import '../styles/receitas-estilo.css';
import Navegacao from '../components/Receitas-components/Navegacao';
import UpperPart from '../components/Receitas-components/UpperPart';
import MiddlePart from '../components/Receitas-components/MiddlePart';
import BottomPart from '../components/Receitas-components/BottomPart';

class Receitas extends React.Component {
    render() {
        return (
            <div className="total">                
                <Navegacao />
                <UpperPart />
                <MiddlePart />
                <BottomPart />
            </div>
        );
    };
};

export default Receitas;