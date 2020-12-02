import React from 'react';
import './DivLista.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";

function DivLista(){
    return(
        <div className="DivLista">
            <table className="TableMov">
                <tr className="TrTable">
                    <td>Salário</td>
                    <td><AiOutlinePlusCircle color ="green"/>R$ 2.000,00</td> 
                </tr>
                <tr className="TrTable">
                    <td>Netflix</td>
                    <td><AiOutlineMinusCircle color = "red"/>R$ 45,00</td>
                </tr>
                <tr className="TrTable">
                    <td>Spotify</td>
                    <td><AiOutlineMinusCircle color = "red"/>R$ 26,90</td>
                </tr>
                <tr className="TrTable">
                    <td>Gasolina</td>
                    <td><AiOutlineMinusCircle color = "red"/>R$ 300,00</td>
                </tr>
                <tr className="TrTable">
                    <td>Cinema</td>
                    <td><AiOutlineMinusCircle color = "red"/>R$ 50,00</td>
                </tr>
                <tr className="TrTable">
                    <td>Gorjeta</td>
                    <td><AiOutlinePlusCircle color ="green"/>R$ 30,00</td>
                </tr>
            </table>
            <div className="MovLinha">   
                <hr color="#8DB892" classname="LinhaMov"/>
            </div>
            <table className="Saldo">
                <tr className="TrSaldo">
                    <td>Saldo</td>
                    <td>R$ 1607,20</td>
                </tr>
            </table>
                 
        </div>
    );
}

export default DivLista;