import React from 'react'
import '../../styles/Sobre-estilo.css'
import CompAn from './aninhado';

const SobreSemProps = (props) =>{
    
    return(
    //<h1>componente sem props +  </h1>
    <div>
        <h1>componente sem props +  </h1>
        <CompAn></CompAn>
    </div>

    );
}




export default SobreSemProps;