import React from 'react';
import Navbar from '../components/index-components/Navbar';
import Parallax from '../components/index-components/Parallax';
import Footer from '../components/index-components/Footer';
import BotaoTopo from '../components/index-components/BotaoTopo';
import '../styles/home-estilo.css';

function Home() {
    return(
        <div className="body">
            <Navbar />
            <Parallax />
            <Footer />
            <BotaoTopo />
        </div>
    );
}

export default Home;