import React from "react";
import "./Pagar.css";

function ContasAPagar(){
    return(
        <div className="PagarGeral">
            <h3 className="TitlePagar"> Contas a pagar</h3>
            <div className="BlocoBranco">
                <div className="BlocoText">
                    <ul className="ListNames">
                        <li>Netflix</li>
                        <li>Prime</li>
                        <li>Faculdade</li>
                        <li>Trasporte</li>
                    </ul>
                </div>

                <div className="BlocoValor">
                    <ul className="ListPrices">
                        <li>R$45,00</li>
                        <li>R$9,90</li>
                        <li>R$750,00</li>
                        <li>R$250,00</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ContasAPagar;
