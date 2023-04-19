import ServicioP from "../components/ServicioP";
import "../Pages/Styles/Home.css";
import bubbles from "../img/bubbles.jpg";

function HomeP() {
	return (
		<main>
			<section>
				<div class="contentBx">
				<div className="Servicios">
					<ServicioP></ServicioP>
					<ServicioP></ServicioP>
					<ServicioP></ServicioP>
				</div>
				</div>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
			</section>
		</main>
	);
}

export default HomeP;
