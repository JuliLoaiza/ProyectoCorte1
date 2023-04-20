import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import '../RegistroC/index.css'

const RegistroC = () => {
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
                            id="signup"
                            placeholder="Sign Up"
                        ></ButtonC>
                    </div>
                    <div className="inputsF">
                        <h1 className="texto">Registro Cliente</h1>
                        <InputC
                            type="text"
                            id="nombres"
                            placeholder="Nombre"
                        />
                        <InputC
                            type="text"
                            id="apellidos"
                            placeholder="Apellidos"
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
                            id="login"
                            placeholder="Log in"
                        />
                        <div className="text">
                            <h3>Soy Proveedor</h3>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default RegistroC;