import React from 'react';
import Navbar from '../components/index-components/Navbar'
import Header from '../components/Header';
import '../styles/Sobre-estilo.css'
import Cards from '../components/Sobre-Components/card';
import Text from '../components/Sobre-Components/Text';

function Sobre(){
    return(
        <div className="body">
            <Header />
            {/* <Navbar btn1="Sobre" btn2="Contato" btn3="Login" btn4="Cadastro"/> */}
            {/* <p> Com o intuito de deixar a sua vida financeira mais organizada.
                Essa plataforma criada por alunos para alunos foi projetada para ser pratica, rapida e visual, dando o usuario uma sentimento de conforto e segurança.
                
                A equipe FinanC é formada por quatro alunos de engenharia de software da Uniamerica que são: Fabio Frasson, Fernando Fritzen, Luisa Ghellere e Raul Rios.
            </p> */}
            <Text/>
            <Cards/>
        </div>
    );

}

export default Sobre;
