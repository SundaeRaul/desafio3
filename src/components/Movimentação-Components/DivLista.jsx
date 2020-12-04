import React, {useState} from 'react';
import './DivLista.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";
import data from '../../JSON/Movimentação.json';

function DivLista(){
    const [entradas, setEntradas] = useState(0)
    const [saidas, setSaidas] = useState(0)
    const formato={
        minimunFractionDigits: 2,
        style: "currency",
        currency: "BRL"
    };

    function GeraSaldo(){
        data.Movimentacao.map((movi) =>
            movi.categoria == "Entrada"
            ? setEntradas(10)
            : console.log("saida")
        )
    }

    GeraSaldo();

    return(
        <div className="DivLista">
            <table className="TableMov">
                {data.Movimentacao.map((dados) =>(
                    
                        <tr key={dados.id} className="TrTable">
                            <td>{dados.descrição}</td>
                            <td>
                                {dados.categoria == "Entrada" ? <AiOutlinePlusCircle color="green"/> : <AiOutlineMinusCircle color="red"/>}
                                {dados.valor.toLocaleString("pt-BR", formato)}
                            </td>
                        </tr>
                ))}
            </table>
            <div className="MovLinha">   
                <hr color="#8DB892" className="LinhaMov"/>
            </div>
            <table className="Saldo">
                <tr className="TrSaldo">
                    <td>Saldo</td>
                    <td>R$ {entradas - saidas}</td>
                </tr>
            </table>
                 
        </div>
    );
}

export default DivLista;