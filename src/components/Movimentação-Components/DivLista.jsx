import React from 'react';
import './DivLista.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";
import data from '../../JSON/Movimentação.json';

function DivLista(){
    const formato={
        minimunFractionDigits: 2,
        style: "currency",
        currency: "BRL"
    };
    return(
        <div className="DivLista">
            <table className="TableMov">
                {data.Movimentacao.map((dados) =>{
                    return(
                        <tr key={dados.id} className="TrTable">
                            <td>{dados.descrição}</td>
                            <td><AiOutlinePlusCircle color="green"/>{dados.valor.toLocaleString("pt-BR", formato)}</td>
                        </tr>
                       
                    );
                })}
            </table>
            <div className="MovLinha">   
                <hr color="#8DB892" classname="LinhaMov"/>
            </div>
            <table className="Saldo">
                {data.Movimentacao.map((dados)=>{
                    return(
                        <tr key={dados.id[6]} classname="TrSaldo">
                            <td>{dados.descrição[6]}</td>
                            <td>{dados.valor[6].toLocaleStrung("pt-BR", formato)}</td>
                        </tr>
                    );
                })}
            </table>
                 
        </div>
    );
}

export default DivLista;