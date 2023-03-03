import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputC from './components/InputC'
import ButtonC from './components/ButtonC'
import bubbles from './img/bubbles.jpg'
import './App.css'

function LoginP() {

  return (
    <main className="InputsM">
      <section>
        <div class="imgBx">
          <img src={bubbles} alt="" />
        </div>
        <div class="contentBx">
          <div className="LoginBtn">
            <ButtonC type="button" id="signup" placeholder="Sign Up"></ButtonC>
          </div>
          <div className="inputsF">
            <h1>Login Proveedor</h1>
            <InputC type="email" id="email" placeholder="Dirección de E-mail" />
            <InputC type="password" id="contrasena" placeholder="Contraseña" />
            <ButtonC type="button" id="login" placeholder="Log in" />
            <h3>Soy Cliente</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginP