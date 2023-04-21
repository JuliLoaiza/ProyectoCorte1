import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import "../HomeP/index.css";
import ServiceCardMR from "../../Components/ServiceCardMR";

const MisReseñas = () => {
	return (
		<main className="InputsM">
			<section>
				<div class="contentBx">
					<div className="Titulo">
						<h1>Mis reseñas</h1>
						<h2>Algunos servicios recomendados para ti</h2>
					</div>
					<div>
						<ServiceCardMR />
						<ServiceCardMR />
						<ServiceCardMR />
						<ServiceCardMR />
					</div>
				</div>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
			</section>
		</main>
	);
};

export default MisReseñas;
