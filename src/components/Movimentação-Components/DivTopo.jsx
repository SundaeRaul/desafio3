import React from 'react';
import './DivTopo.css';
import { AiOutlineMinusCircle } from "react-icons/ai";
import {AiOutlinePlusCircle} from "react-icons/ai";

function DivTopo(){
    return(
        <div className="TopoMov">
            <h1>Movimentação</h1>
            <button type='submit' className="NovaMov"><AiOutlinePlusCircle className="NovaMovPLus"/>Nova Movimentação</button>
        </div>
    );
}

export default DivTopo;