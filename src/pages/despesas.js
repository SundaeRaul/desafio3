import React from 'react';


import '../styles/despesas.css';

import Header from '../components/despesas-components/Header-des';
import Wrapper from '../components/despesas-components/Wrapper';

function Despesas(){
    return(
        <div id="despesas">
            <Header />
            <Wrapper />

        </div>
    );
}

export default Despesas;