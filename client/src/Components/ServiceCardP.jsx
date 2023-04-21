import React from "react";
import "../Components/styles/ServiceCardC.css";
import ProfilePic from "../img/ProfilePic.png";
import star from "../img/star.png";

const ServiceCardC = (props) => {
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
				<h2 class="card-title">Nombre Servicio</h2>
				<h3 class="card-subtitle">Subtítulo</h3>
				<p class="card-description">Descripción</p>
				<div class="card-categories">
					<span>Categoría 1</span>
					<span>Categoría 2</span>
					<span>Categoría 3</span>
				</div>
			</div>
		</div>
	);
};
export default ServiceCardC;
