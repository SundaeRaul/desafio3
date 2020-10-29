import React from 'react';
import '../App.css';
import Fabio from '../components/Fabio'
import Raul from '../components/Raul'
import SobreSemProps from '../components/Sobre-components/Sobre'
import Sobre from '../components/Sobre-components/Comprops'


import { Link } from 'react-router-dom';

export default () =>
  <div className="App">
      <Fabio>       
      </Fabio>

      <Raul/>

      <Sobre n1={2} n2={3}/>
      <SobreSemProps/>

      

      <p>
        <Link to="/Contato">Ir para a página de contato</Link>
      </p>

  </div> 
