

import React, {Component} from "react";

class SectionBlog extends React.Component{
    render(){
        return(
            <div>
<div class="seccion-inferior contenedor seccion">
        <section class="blog">
            <h3 class="centrar-texto fw-300">Nuestro Blog</h3>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="assets/img/blog1.jpg" alt="Entrada de blog" />
                </div>
                <div class="texto-entrada">
                    <a href="entrada.html">
                        <h4>Terraza  en el techo de tu casa</h4>
                    </a>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Consejos para construir una terraza en el techo de tu casa, con los mejores materiales y ahorrando dinero</p>
                </div>
            </article>

            <article class="entrada-blog">
                <div class="imagen">
                    <img src="assets/img/blog2.jpg" alt="Entrada de blog" />
                </div>
                <div class="texto-entrada">
                    <a href="entrada.html">
                        <h4>Guía para la decoración de tu hogar</h4>
                    </a>
                    <p>Escrito el: <span> 20/10/2019 </span> por: <span> Admin </span> </p>
                    <p>Maximiza el espacio en tu hogar con esta guia, aprende a combinar muebles y colores para darle vida a tu espacio</p>
                </div>
            </article>
        </section>

        <section class="testimoniales">
            <h3 class="centrar-texto fw-300">Testimoniales</h3>
            <div class="testimonial">
                
                <blockquote>
                    El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.
                </blockquote>
                <p>- Juan De la torre</p>
            </div>
        </section>

    </div>
            </div>
        )
    }
}
export default SectionBlog

