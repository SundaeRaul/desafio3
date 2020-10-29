import React from 'react';
import Navbar from '../components/index-components/Navbar'
import Parallax from '../components/index-components/Parallax';
import Footer from '../components/index-components/Footer';
import '../styles/index-estilo.css';
import '../styles/normalize.css'

import { Link } from 'react-router-dom';

function Index(){
    return(
        <div className="body">
            <Navbar />
            <Parallax />
            <Footer />
        </div>
    );
}

export default Index;
