import React from 'react';
import '../App.css';
import Fabio from '../components/Fabio'
import Raul from '../components/Raul'

import { Link } from 'react-router-dom';

export default () =>
  <div className="App">
      <Fabio>       
      </Fabio>

      <Raul/>

      <p>
        <Link to="/Contato">Ir para a página de contato</Link>
      </p>

  </div> 
