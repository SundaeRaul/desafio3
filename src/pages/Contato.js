import React, { useState } from 'react';

import '../styles/contato-estilo.css';


import Header from '../components/Header';
import BoxLeft from '../components/contact-components/BoxLeft';
import BoxRight from '../components/contact-components/BoxRight';


function Contato() {


    return(
        <div className="contact-page">

            <Header/>

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
