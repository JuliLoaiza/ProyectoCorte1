import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import "../HomeP/index.css";
import ServiceCardMC from "../../Components/ServiceCardMC";

const MisClientes = () => {
	return (
		<main className="InputsM">
			<section>
				<div class="contentBx">
					<div className="Titulo">
						<h1>Mis clientes</h1>
						<h2>Algunos servicios recomendados para ti</h2>
					</div>
					<div>
						<ServiceCardMC />
						<ServiceCardMC />
						<ServiceCardMC />
						<ServiceCardMC />
					</div>
				</div>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
			</section>
		</main>
	);
};

export default MisClientes;
