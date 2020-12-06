import React from 'react';
import '../styles/Page404.css'
import Navbar from '../components/Home-Components/Navbar';
import Error from '../components/Page404-Components/Error';
import Footer from '../components/Home-Components/Footer';

function Page404() {
    return(
        <div>
            <Navbar />
            <Error />
            <Footer />
        </div>
    );
}

export default Page404;