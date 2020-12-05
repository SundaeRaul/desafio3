import React from 'react';
import '../styles/Page404.css'
import Navbar from '../components/index-components/Navbar';
import Error from '../components/Page404-Components/Error';
import Footer from '../components/index-components/Footer';

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