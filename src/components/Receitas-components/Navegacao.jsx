import React, { Component } from "react";
import logo2 from "../../images/logo2.png";
import "./Navegacao.css";
import "./BurgerMenu.css";
import { slide as Menu } from "react-burger-menu";
import roundedProfilePic from "../../images/roundedProfilePic.png";
import { VscHome } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";
import { VscDiffRemoved } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscNote } from "react-icons/vsc";
import { VscGear } from "react-icons/vsc";
import { VscSignOut } from "react-icons/vsc";

class Navegacao extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }
  render() {
    return (
      <div className="navbar">
        <Menu
          menuClassName={"menuReceitas"}
          itemListClassName={"menuReceitas-listaItem"}
        >
          <div className="menuItemContainer">
            <div className="menuItemContainerHeader">
              <img className="profilePic" src={roundedProfilePic} alt="" />
              <div className="menu-item dadosProfilePic">
                <span>Raul Rios</span>
                <span>
                  <i>RA: 501792</i>
                </span>
              </div>
            </div>
            <div className="menuItemContainerContent">
              <div className="menuContainerItem">
                <a id="botao home" className="menu-item" href="/Inicial">
                  <VscHome className="containerIcon" />
                  Home
                </a>
              </div>
              <div className="menuContainerItem">
                <a id="botao receitas" className="menu-item" href="/Receitas">
                  <VscDiffAdded className="containerIcon" />
                  Receitas
                </a>
              </div>
              <div className="menuContainerItem">
                <a id="botao despesas" className="menu-item" href="/Despesas">
                  <VscDiffRemoved className="containerIcon" />
                  Despesas
                </a>
              </div>
              <div className="menuContainerItem">
                <a
                  id="botao movimentacao"
                  className="menu-item"
                  href="/Movimentacao"
                >
                  <VscNote className="containerIcon" />
                  Movimentação
                </a>
              </div>
              <div className="menuContainerItem">
                <a id="botao contas" className="menu-item" href="#">
                  <VscAccount className="containerIcon" />
                  Contas
                </a>
              </div>
              <div className="menuContainerItem">
                <a
                  id="botao configuracoes"
                  onClick={this.showSettings}
                  className="menu-item--small"
                  href="#"
                >
                  <VscGear className="containerIcon" />
                  Configurações
                </a>
              </div>
              <div className="menuContainerItem">
                <a id="botao sair" className="menu-item" href="/Login">
                  <VscSignOut className="containerIcon" />
                  Sair
                </a>
              </div>
            </div>
          </div>
        </Menu>
        <img className="logo" src={logo2} alt="Financ" />
      </div>
    );
  }
}

export default Navegacao;
