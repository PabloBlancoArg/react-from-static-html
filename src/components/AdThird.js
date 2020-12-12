import React, {Component} from "react";

class AdThird extends React.Component{
    render(){
        return(
            <div className="anuncio">
                            <img src="assets/img/anuncio3.jpg" alt="Anuncio casa con alberca" />
                            <div className="contenido-anuncio">
                                <h3>Casa con alberca</h3>
                                <p>Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad</p>
                                <p className="precio">$3,000,0000</p>
                                <ul className="iconos-caracteristicas">
                                    <li>
                                        <img src="assets/img/icono_wc.svg" alt="icono wc" />
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img src="assets/img/icono_estacionamiento.svg" alt="icono autos" />
                                        <p>3</p>
                                    </li>
                                    <li>
                                        <img src="assets/img/icono_dormitorio.svg" alt="icono habitaciones" />
                                        <p>4</p>
                                    </li>
                                </ul>

                                <a href="anuncio.html" className="boton boton-amarillo d-block">Ver Propiedad</a>
                            </div>
            </div>        
        )
    }
}
export default AdThird