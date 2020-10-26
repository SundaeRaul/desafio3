import React from 'react';
import './App.css';
import Fabio from './components/Fabio'
import Form from './components/Form'

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

      <Form/>

    </div>    
  </div>
)
