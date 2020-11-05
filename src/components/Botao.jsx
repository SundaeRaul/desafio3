import { BottomNavigation } from '@material-ui/core';
import React from 'react'
import './Botao.css'

class Botao extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isBotaoOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isBotaoOn: !state.isBotaoOn
        }));
    }

    render() {
        return (
            <button className="botao" onClick={this.handleClick}>
                {this.state.isBotaoOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Botao;