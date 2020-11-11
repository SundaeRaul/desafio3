import React from 'react'
import '../components/Fabio.css'

class Fabio extends React.Component{
        constructor(){
            super()
            this.state = {
                tempoBom: true
            }
        }

        render(){
            return(
                this.state.tempoBom ?
                <div className="bomTempo"><p>O tempo está bom</p></div> :
                <div className="mauTempo"><p>O tempo está mau</p></div>
            );
        }
}

export default Fabio;    