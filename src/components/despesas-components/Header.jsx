import React from 'react';

import './Header.css';

import Logo from '../../images/logo2.png';

function Header() {
  return(
      <header id="despesas-header">
          <img src={ Logo } alt="Logo Financ"></img>
      </header>
  );
}

export default Header;