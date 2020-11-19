import React from 'react';
import Header from '../components/Header';
import Parallax from '../components/index-components/Parallax';
import Footer from '../components/index-components/Footer';
import BotaoTopo from '../components/index-components/BotaoTopo';
import '../styles/home-estilo.css';

function Home() {
    return(
        <div className="body">
            <Header />
            {/* <Navbar btn1="Sobre" btn2="Contato" btn3="Login" btn4="Cadastro"/> */}
            <Parallax />
            <Footer />
            <BotaoTopo />
        </div>
    );
}

export default Home;