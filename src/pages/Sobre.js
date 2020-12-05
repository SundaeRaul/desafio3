import React from 'react';
import Header from '../components/Header';
import '../styles/Sobre-estilo.css'
import Cards from '../components/Sobre-Components/card';
import Text from '../components/Sobre-Components/Text';

function Sobre(){
    return(
        <div className="body">
            <Header />
            <Text/>
            <Cards/>
        </div>
    );

}

export default Sobre;