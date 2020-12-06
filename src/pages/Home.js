import React, { useState } from 'react';
import Navbar from '../components/Home-Components/Navbar';
import Parallax from '../components/Home-Components/Parallax';
import Footer from '../components/Home-Components/Footer';
import BotaoTopo from '../components/Home-Components/BotaoTopo';
import {ModalPolitica} from '../components/Home-Components/ModalPolitica';
import '../styles/home-estilo.css';

function Home () {
    const [show, setShow] = useState(false);

    const closeModalPoliticaHandler = () => setShow(false);

        return(
            <div className="body">
                <Navbar />
                <Parallax />
                <Footer />
                <ModalPolitica show={show} closeModalPoliticaHandler={() => setShow(false)} />
                <BotaoTopo />
            </div>
        );    
}

export default Home;