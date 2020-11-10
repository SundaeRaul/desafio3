import React from 'react';
import '../styles/receitas-estilo.css';
import Navegacao from '../components/Receitas-components/Navegacao';
import UpperPart from '../components/Receitas-components/UpperPart';
import BottomPart from '../components/Receitas-components/BottomPart';

import { Link } from 'react-router-dom';

class Receitas extends React.Component {
    render() {
        return (
            <div className="total">                
                <Navegacao />
                <UpperPart />
                <BottomPart />
            </div>
        );
    };
};

export default Receitas;