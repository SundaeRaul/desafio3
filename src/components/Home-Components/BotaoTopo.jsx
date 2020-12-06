import React from 'react';
import './BotaoTopo.css';

function BotaoTopo () {
    window.addEventListener('scroll', function() {
        const botaoTopo = document.getElementById('toTop');
        if (window.scrollY < 500) {
            botaoTopo.style.visibility = "hidden"
        } else {
            botaoTopo.style.visibility = "visible"
        }        
   });
    return(
        <div id="toTop" className="Topo">
            <a href="#"> <i className="fas fa-arrow-up"></i> </a>
        </div>
    );    
}

export default BotaoTopo;