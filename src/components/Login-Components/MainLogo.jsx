import React from 'react';
import Logo from '../../images/logo2.png'
import './MainLogo.css';
import { Link } from 'react-router-dom'

class MainLogo extends React.Component {
    render() {
        return(
            <div id="container-mainlogo">
                <Link to="/"><img id="logo" src={Logo} alt=""/></Link>
            </div>
        );
    }
}
    
export default MainLogo;