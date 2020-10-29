import React from 'react';
import Navbar from '../components/index-components/Navbar'
import Parallax from '../components/index-components/Parallax';
import '../styles/index-estilo.css';

import { Link } from 'react-router-dom';

function Index(){
    return(
        <div>
            <Navbar />
            <Parallax />
        </div>
    );
}

export default Index;
