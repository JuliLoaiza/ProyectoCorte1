import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import "../HomeP/index.css";
import ServiceCardP from "../../Components/ServiceCardP";

const HomeP = () => {
	return (
		<main className="InputsM">
			<section>
				<div class="contentBx">
					<div className="Titulo">
						<h1>Home</h1>
						<h2>Servicios que ofreces</h2>
					</div>
					<div>
						<ServiceCardP />
						<ServiceCardP />
						<ServiceCardP />
						<ServiceCardP />
					</div>
				</div>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
			</section>
		</main>
	);
};

export default HomeP;
