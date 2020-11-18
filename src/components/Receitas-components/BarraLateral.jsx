import React from 'react';
import './BarraLateral.css';
import { slide as Menu } from 'react-hamburger-menu';

export default props => {
    return (
        <Menu>
            <a href="/" className="menu-item">Home</a>
            <a href="" className="menu-item">Receitas</a>
            <a href="" className="menu-item">Despesas</a>
            <a href="" className="menu-item">Movimentação</a>
            <a href="" className="menu-item">Contas</a>
            <a href="" className="menu-item">Configurações</a>
            <a href="" className="menu-item">Sair</a>
        </Menu>
    );
};