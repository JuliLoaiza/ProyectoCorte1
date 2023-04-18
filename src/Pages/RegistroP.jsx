import InputC from "../components/InputC";
import ButtonC from "../components/ButtonC";
import bubbles from "../img/bubbles.jpg";
import "../Pages/Styles/App.css";

function RegistroP() {
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

export default RegistroP;
