import React from "react";
import "./styles/ServicioC.css";
import imgC from "../img/imgC.jfif";

const ServicioC = (props) => {
	return (
		<div className="main">
			<div className="image">
				<div className="textBx">
					<img src={imgC} alt="" />

					<h1>Nombre del proveedor</h1>
					<p>descripción del servicio a ofrecer</p>
				</div>
			</div>
		</div>
	);
};

export default ServicioC;
