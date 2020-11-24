import React from "react";
import "./Receber.css";

function ContasAReceber(){
    return(
        <div className="ReceberGeral">
            <h3 className="TitleReceber"> Contas a receber</h3>
            <div className="BlocoBranco">
                <div className="BlocoText">
                    <ul className="ListNames">
                        <li>Estagio</li>
                        <li>FGTS</li>
                        <li>Freelance</li>
                        <li>Trasporte</li>
                    </ul>
                </div>

                <div className="BlocoValor">
                    <ul className="ListPrices">
                        <li>R$880,00</li>
                        <li>R$470,00</li>
                        <li>R$150,00</li>
                        <li>R$250,00</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContasAReceber;
