import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import { useState } from "react";
// import { useHistory } from 'react-router-dom';
import "../LoginC/index.css";
import { useNavigate } from "react-router-dom";

const LoginC = () => {
    // const history = useHistory();
    // const navegar = () => {
    //     history.push("/HomeC")
    // }
    const navigate = useNavigate();
    const [user, setUser] = useState({
        user: "",
        password: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        navigate("/homec");
    };

    return (
        <main className="InputsM">
            <section>
                <div className="imgBx">
                    <img src={bubbles} alt="" />
                </div>
                <div className="contentBx">
                    <div className="LoginBtn">
                        <ButtonC type="button" id="signup" placeholder="Sign Up"></ButtonC>
                    </div>

                    <div className="inputsF">
                        <form className="contendor-form">
                            <h1 className="texto">Login Cliente</h1>
                            <input
                                className="inputC"
                                name="user"
                                // type="email"
                                id="email"
                                placeholder="Dirección de E-mail"
                                onChange={handleChange}
                                value={user.user}
                            />
                            <input
                                className="inputC"
                                name="password"
                                type="password"
                                id="contrasena"
                                placeholder="Contraseña"
                                onChange={handleChange}
                                value={user.password}
                            />
                            <a href="/homec" className="ButtonC">
                                Log In
                            </a>
                            <div className="text">
                                <h3>Soy Proveedor</h3>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LoginC;
