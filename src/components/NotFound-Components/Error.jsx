import { render } from '@testing-library/react';
import React from 'react';
import './error.css'
import PageNotFound from '../../icons/pagenotfound.svg';

class Error extends React.Component {
    render() {
        return (
            <div id="geral">
                <img classname="figerro" src={PageNotFound} alt="Erro 404"/>
            </div>
        );
    };
}

export default Error;