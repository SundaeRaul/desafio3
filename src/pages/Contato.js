import React, { useState } from 'react';

import '../styles/contato-estilo.css';
import '../components/contact-components/media.css';

import Navbar from '../components/index-components/Navbar'


import Header from '../components/Header';
import BoxLeft from '../components/contact-components/BoxLeft';
import BoxRight from '../components/contact-components/BoxRight';


function Contato() {


    return(
        <div className="contact-page">

            {/* <Navbar btn1="Sobre" btn2="Contato" btn3="Login" btn4="Cadastro"/> */}
            
            <Header />
            <div className="page">
                <div className="box">
                    <BoxLeft/>
                    <BoxRight/>
                </div>
            </div>     

        </div>

    );
}

export default Contato;
