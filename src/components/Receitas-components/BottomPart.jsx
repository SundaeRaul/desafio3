import React from "react";
import "./BottomPart.css";
import ListaDados from "../Receitas-components/ListaDados";

class BottomPart extends React.Component {
  render() {
    return (
      <div className="btm-part">
        <ListaDados />
      </div>
    );
  }
}

export default BottomPart;