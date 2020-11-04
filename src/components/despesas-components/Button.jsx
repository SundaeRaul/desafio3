import React from 'react';

import './Button.css';

function Button(props) {
  return(
    <button className="despesa-botao">{props.buttontext}</button>
  );
}

export default Button;