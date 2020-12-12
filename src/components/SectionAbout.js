import React, {Component} from "react";

class SectionAbout extends React.Component{
    render(){
        return(
            <div>
				<section className="contenedor seccion">
        <h2 className="fw-300 centrar-texto">Más Sobre Nosotros</h2>

        <div className="iconos-nosotros">
            <div className="icono">
                <img src="assets/img/icono1.svg" alt="Icono Seguridad" />
                <h3>Seguridad</h3>
                <p>Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
            </div>

            <div className="icono">
                <img src="assets/img/icono2.svg" alt="Icono Mejor Precio" />
                <h3>El Mejor Precio</h3>
                <p>Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
            </div>

            <div className="icono">
                <img src="assets/img/icono3.svg" alt="Icono a Tiempo" />
                <h3>A Tiempo</h3>
                <p>Quasi quibusdam, quos deserunt, recusandae iusto dolorem voluptatibus quaerat veritatis consectetur culpa sit dignissimos maiores iure id, magnam non voluptatum molestiae doloremque.</p>
            </div>
        </div>
    </section>
            </div>
        )
    }
}
export default SectionAbout