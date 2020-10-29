import React from 'react'
import '../../styles/Sobre-estilo.css'

const Sobre = (props) =>{
    function soma(a, b){
        return a+b
    }
    return(
    <h1>a soma é{soma(props.n1, props.n2)}</h1>
    );
}




export default Sobre;