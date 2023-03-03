import ServicioC from "../components/ServicioC";
import "../Pages/Styles/App.css";

function HomeC() {
	return (
		<main>
			<div className="Servicios">
				<ServicioC></ServicioC>
				<ServicioC></ServicioC>
				<ServicioC></ServicioC>
			</div>
		</main>
	);
}

export default HomeC;
