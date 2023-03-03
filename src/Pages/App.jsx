import InputC from "../components/InputC";
import bubbles from "../img/bubbles.jpg";
import "../Pages/Styles/App.css";
import ButtonC from "../components/ButtonC";

function App() {
	return (
		<main className="InputsM">
			<section>
				<div class="imgBx">
					<img src={bubbles} alt="" />
				</div>
				<div class="contentBx">
					<div className="LoginBtn">
						<ButtonC
							type="button"
							id="login"
							placeholder="Log In"
						></ButtonC>
					</div>
					<div className="inputsF">
						<h1>Registro Proveedor</h1>
						<InputC type="text" id="name" placeholder="Nombre" />
						<InputC
							type="text"
							id="apellido"
							placeholder="Apellido"
						/>
						<InputC
							type="email"
							id="email"
							placeholder="Dirección de E-mail"
						/>
						<InputC
							type="text"
							id="servicio"
							placeholder="Servicio a Ofrecer"
						/>
						<InputC
							type="password"
							id="contrasena"
							placeholder="Contraseña"
						/>
						<ButtonC
							type="button"
							id="signup"
							placeholder="Sign Up"
						/>
						<h3>Soy Cliente</h3>
					</div>
				</div>
			</section>
		</main>
	);
}

export default App;
