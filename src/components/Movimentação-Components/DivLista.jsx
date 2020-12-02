import React from 'react';
import './DivLista.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";

function DivLista(){
    return(
        <div className="DivLista">
            <div classname="Duaslistas">
                <div classname="ListaItens">
                    <ul classname="UlItens">
                        <li>Salário</li>
                        <li>Netflix</li>
                        <li>Spotify</li>
                        <li>Gasolina</li>
                        <li>Cinema</li>
                        <li>Gorjeta</li>
                    </ul>
                </div>

                <div classname="ListaPreços">
                    <ul classname="UlPreços">
                        <li><AiOutlinePlusCircle/>R$ 2.000,00</li>
                        <li><AiOutlineMinusCircle/>R$ 45,90</li>
                        <li><AiOutlineMinusCircle/>R$ 26,90</li>
                        <li><AiOutlineMinusCircle/>R$ 300,00</li>
                        <li><AiOutlineMinusCircle/>R$ 50,00</li>
                        <li><AiOutlinePlusCircle/>R$ 30,00</li>
                    </ul>
                </div>
            </div>
            <hr classname="LinhaMov"/>
        </div>
    );
}

export default DivLista;