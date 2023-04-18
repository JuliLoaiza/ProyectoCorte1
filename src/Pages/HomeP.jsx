import ServicioP from "../components/ServicioP";
import "../Pages/Styles/App.css";
import bubbles from "../img/bubbles.jpg";

function HomeP() {
	return (
		<main>
			<section>
				<div className="Servicios">
					<ServicioP></ServicioP>
					<ServicioP></ServicioP>
					<ServicioP></ServicioP>
				</div>
				<div class="contentBx"></div>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
			</section>
		</main>
	);
}

export default HomeP;
