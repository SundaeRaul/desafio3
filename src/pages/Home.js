import React from 'react';
import Navbar from '../components/index-components/Navbar'
import Parallax from '../components/index-components/Parallax';
import Footer from '../components/index-components/Footer';
import BotaoTopo from '../components/index-components/BotaoTopo';
import '../styles/home-estilo.css';

function Home() {
    return(
        <div className="body">
            <Navbar btn1="Sobre" btn2="Contato" btn3="Login" btn4="Cadastro"/>
            <Parallax />
            <Footer />
            <BotaoTopo />
        </div>
    );
}

export default Home;