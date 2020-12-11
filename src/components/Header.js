import React, {Component} from 'react';

class Header extends React.Component{
	render(){
		return(
					<div>
					<div id="wrapper">
						<header id="header">
							<div class="inner">
									<a href="index.html" class="logo">
										<span class="symbol"><img src="assets/img/logo.svg" alt="" /></span><span class="title">La Plata</span>
									</a>
							</div>
						</header>
					</div>
					</div>
				)
		}
}
export default Header