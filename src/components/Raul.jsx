import React from 'react';
import './Raul.css';

 function Raul () {
    return (
        <div id="container">
            <h1>Login</h1>
            <form>
                <input type="text" className="LoginForm" placeholder="RA"/>
                <input type="password" className="LoginForm" placeholder="Senha"/>
            </form>
        </div>    
    );

 }
 export default Raul;

