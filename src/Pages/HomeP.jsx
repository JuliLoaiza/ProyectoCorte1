import ServicioP from "../components/ServicioP";
import "../Pages/Styles/App.css";

function HomeP() {
	return (
		<main>
			<div className="Servicios">
				<ServicioP></ServicioP>
				<ServicioP></ServicioP>
				<ServicioP></ServicioP>
			</div>
		</main>
	);
}

export default HomeP;
