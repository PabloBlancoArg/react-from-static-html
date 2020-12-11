import React, {Component} from 'react';
import Images from '../components/Images';

class Home extends React.Component{
	render(){
		return(
			<div>
			<div id="wrapper">

					<div id="main">
						<div class="inner">
							<div>
								<h1>Sitio de muestra de atractivos turisticos de la Ciudad de La Plata</h1>
								<p>La Plata es una de las principales productoras de flores y tomates de Argentina. Sí, tomates! y ademas La ciudad de La Plata es la que tiene mayor cantidad de butacas de cine por habitante en el país.</p>
					
							</div>

							<Images />
						</div>
					</div>

			</div>

			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
			</div>
		)
	}
}
export default Home