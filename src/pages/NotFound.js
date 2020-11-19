import React from 'react';
import Header from '../components/Header';
import Error from '../components/NotFound-Components/Error';
import Footer from '../components/index-components/Footer';
import '../styles/notfound.css';

class NotFound extends React.Component {
    render() {
        return (
            <div className="geralcont">
                <Header />
                <Error />
                <Footer />
            </div>
        );
    };
}

export default NotFound;