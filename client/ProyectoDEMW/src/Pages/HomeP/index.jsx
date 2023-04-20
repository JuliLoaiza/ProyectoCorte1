import InputC from "../../Components/InputC";
import ButtonC from "../../Components/ButtonC";
import bubbles from "../../img/bubbles.jpg";
import '../HomeC/index.css'
import ServiceCardC from "../../Components/ServiceCardC";

const HomeC = () => {
    return (
        <main className="InputsM">
            <section>
                <div class="contentBx">
                    <div className="Titulo">
                        <h1>Home</h1>
                    </div>
                    <div>
                        <ServiceCardC />
                        <ServiceCardC />
                        <ServiceCardC />
                        <ServiceCardC />
                    </div>
                </div>
                <div class="imgBx">
                    <img src={bubbles} alt="" />
                </div>
            </section>
        </main >
    )
}

export default HomeC;