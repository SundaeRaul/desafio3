import React from 'react';
import Header from '../components/Header';
import '../styles/Sobre-estilo.css'
import Cards from '../components/Sobre-Components/card';
import Text from '../components/Sobre-Components/Text';
import Navbar from '../components/Home-Components/Navbar';

function Sobre(){
    return(
        <div className="body">
            <Navbar />
            <Text/>
            <Cards/>
        </div>
    );

}

export default Sobre;