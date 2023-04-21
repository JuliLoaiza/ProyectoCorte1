import React from "react";
import "../Components/styles/ServiceCardC.css";
import ProfilePic from "../img/ProfilePic.png";
import star from "../img/star.png";

const ServiceCardMR = (props) => {
	return (
		<div class="card">
			<div class="card-icon">
				<img src={star} alt="Ícono" />
				<span class="card-icon-text">Texto</span>
			</div>
			<div class="card-image">
				<img src={ProfilePic} alt="Imagen" />
			</div>
			<div class="card-content">
				<h2 class="card-title">Pepito Perez</h2>
				<h3 class="card-subtitle">
					Me cae mal porque es una grosera la abogada Daniela
				</h3>
			</div>
		</div>
	);
};
export default ServiceCardMR;
