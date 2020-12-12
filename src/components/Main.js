import React, {Component} from "react";
import Ads from './Ads'

class Main extends React.Component{
    render(){
        return(
            <div>
				<main className="seccion contenedor">
						<h2 className="fw-300 centrar-texto">Casas y Depas en Venta</h2>

						<Ads/>

						<div className="ver-todas">
								<a href="anuncios.html" className="boton boton-verde">Ver Todas</a>
						</div>
    		</main>
            </div>
        )
    }
}
export default Main