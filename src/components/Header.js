import React, {Component} from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
							<header className="site-header inicio">
									<div className="contenedor contenido-header">
											<div className="barra">
													<a href="/">
															<img src="assets/img/logo.svg" alt="Logotipo de Bienes Raices" />
													</a>

													<div className="mobile-menu">
															<a href="#navegacion">
																	<img src="assets/img/barras.svg" alt="Icono Menu" />
															</a>
													</div>

													<nav id="navegacion" className="navegacion">
															<a href="nosotros.html">Nosotros</a>
															<a href="anuncios.html">Anuncios</a>
															<a href="blog.html">Blog</a>
															<a href="contacto.html">Contacto</a>
													</nav>
											</div>
											<h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
									</div> 
							</header>
            </div>
        )
    }
}
export default Header