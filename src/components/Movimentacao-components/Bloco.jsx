import React from 'react';
import './Bloco.css';
import circle from '../../icons/add-circle-outline.svg';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";


function Bloco (){
    return(
        <>
        <span className="tituloMov">Movimentação</span>

        <div className="novaMovimentacao">
            <img className="icone-botao" src={circle} alt="" />
            <span>Nova Movimentação</span>
        </div>

        <div className="bloco">
            <div className="listas">
                <div className="listaOrigem">
                    <ul className="Origem">
                        <li>Salário</li>
                        <li>Netflix</li>
                        <li>Spotify</li>
                        <li>Gasolina</li>
                        <li>Gorjeta</li>
                        <li>Cinema</li>
                    </ul>
                </div>
                
                <div className="listaPrecos">
                    <ul className="Preco">
                        <li><AiOutlinePlusCircle color="green"/>R$ 2.000,00</li>
                        <li><AiOutlineMinusCircle color="red"/>R$ 45,00</li>
                        <li><AiOutlineMinusCircle color="red"/>R$ 26,90</li>
                        <li><AiOutlineMinusCircle color="red"/>R$ 300,00</li>
                        <li><AiOutlinePlusCircle color="green"/>R$ 30,00</li>
                        <li><AiOutlineMinusCircle color="red"/>R$ 50,00</li>
                    </ul>   
                </div>
            </div>

            <hr className="Mov"/>

            <div className="saldo">
                <ul className="saldodiv">
                    <strong><li>Saldo Previsto</li></strong>
                    <strong><li>R$ 1607,20</li></strong>
                </ul>
            </div>
         </div>
        </>
    );
}

export default Bloco;