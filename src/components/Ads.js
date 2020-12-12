import React, {Component} from "react";
import AdFirst from './AdFirst'
import AdSecond from './AdSecond'
import AdThird from './AdThird'

class Ads extends React.Component{
    render(){
        return(
            <div>
				<div className="contenedor-anuncios">
                        <AdFirst/>
                        <AdSecond/>
                        <AdThird/>                       
                    </div>
            </div>
        )
    }
}
export default Ads