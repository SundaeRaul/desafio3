import React from 'react';
import './Parallax.css'
import '../../styles/normalize.css'

class Parallax extends React.Component {
    render(){
        return(
            <div>
                <hr className="linha" />
                <div className="pimg1">
                    <div className="ptext">
                        <span className="border">
                            Controle financeiro eficiente
                        </span>
                    </div>
                </div>
                <hr className="linha" />
                <section className="section">
                    <p>
                        Acreditamos que um controle financeiro pode ser <strong>eficiente</strong> e ao mesmo tempo <strong>simples</strong>. Aqui no FinanC você poderá verificar isso na prática, enquanto equilibra suas contas e melhora substancialmente sua saúde financeira.
                    </p>
                </section>
                <hr className="linha" />
                <div className="pimg2">
                    <div className="ptext">
                        <span className="border">
                            Trace Metas
                        </span>
                    </div>
                </div>
                <hr className="linha" />
                <section className="section">
                    <p>
                        Vamos mais longe quando temos disciplina. Ao controlar suas finanças, você terá a oportunidade de traçar metas mais arrojadas, sejam elas de curto, médio ou longo prazo.
                    </p>
                </section>
                <hr className="linha" />
                <div className="pimg3">
                    <div className="ptext">
                        <span className="border">
                            Impulsione seus sonhos
                        </span>
                    </div>
                </div>
                <hr className="linha" />
                <section className="section">
                    <p>
                        Qual o seu sonho? Uma viagem, um imóvel, abrir seu próprio negócio? Tendo metas estabelecidas, você fica mais perto de realizar seus sonhos.
                    </p>
                </section>
                <hr className="linha" />
                <div className="pimg4"></div>
                <hr className="divisor-footer"/>
            </div>
        );
    }
}

export default Parallax;