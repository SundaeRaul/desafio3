import React from "react";
import "./ModalPolitica.css";

export const ModalPolitica = ({
  id = "modalPolitica",
  show,
  closeModalPoliticaHandler,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) closeModalPoliticaHandler();
  }
  return (
    <div
      id={id}
      onClick={handleOutsideClick}
      className="modalPolitica"
      style={{
        display: show ? "block" : "none",
      }}
    >
    <div className="modalPoliticaWrapper">

    </div>
      <h1>Olá Mundo ReactJS!</h1>
    </div>
  );
};
