import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fabio from './components/Fabio'

export default (props) => (
  <div className="App">
    <div className="container">
      <Fabio>
        <header className="header">
          <h2>Lista de integrantes do grupo</h2>
        </header>
        <div className="integrantes">
          <ul> 
            <li>Fabio</li>
            <li>Fernando</li>
            <li>Luisa</li>
            <li>Raul</li>
          </ul>
        </div>      
      </Fabio>
    </div>    
  </div>
)
