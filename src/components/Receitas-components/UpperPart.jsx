import React, { useState } from "react";
import "./UpperPart.css";
import calendar from "../../icons/calendar-clear-outline.svg";
import print from "../../icons/print-outline.svg";
import circle from "../../icons/add-circle-outline.svg";

function UpperPart(props) {
  return (
    <div className="upperPartWrapper">
      <div className="upperPartHeader">
        <p className="upperPartTitle">Receitas</p>
      </div>
      <div className="upperPartContent">
        <div className="upperPartBtnContainer1">
          <button onClick={props.showModal} className="upperPartBtn1"  type="submit"><img className="upperPartIcon" src={circle} alt=""/><span> Nova transação</span></button>
        </div>
        <div className="upperPartBtnContainer2">
          <button className="upperPartBtn2" type="submit"><img className="upperPartIcon" src={print} alt=""/><span> Baixar relatório de entrada</span></button>
        </div>
        <div className="upperPartBtnContainer3">
          <button className="upperPartBtn3" type="submit"><img className="upperPartIcon" src={calendar} alt=""/><span>Filtrar por data</span></button>
        </div>
        
        
        
      </div>
    </div>
  );
}

export default UpperPart;