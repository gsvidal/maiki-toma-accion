import "./Bio.css";
import Maiki from "../../assets/maiki-bio-trans.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Bio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bio">
      <img src={Maiki} alt="Maiki de Toma Acción" className="bio__img" />
      <span className="maiki-blob"></span>
      <div className="bio__copy">
        <section className="copy copy--1">
          <p className="copy--1-title">
            "Mami, comidita?" "Papi, te quiero invitar comida!"
          </p>
          <p className="copy--1-subtitle">
            Hola soy <strong>Maiki de Toma Acción</strong> y te invito hoy a que
            seas parte de mi comunidad
          </p>
          <p>
            Todo empezó hace un año, cuando decidí crear contenido, pero quería
            que sea algo poco diferente, no solo entretenido sino que también
            alimente el alma y nos devuelva la esperanza en los humanos.
          </p>
          <p>
            Sobre todo en estos tiempos en donde parece que cada persona de este
            mundo ve por su propio beneficio.
          </p>

          <p>
            Te cuento un poco de mí, nacida en la Amazonía peruana, contadora de
            profesión, emprendedora y voluntaria desde hace muchísimos años.
          </p>
          <p>El lema en mi vida es Inspira a otros, para hacer el bien. </p>
        </section>

        <section className="copy copy--2">
          <p>
            Con tu suscripción <span className="prize-icons"></span>
            <strong className="strong-red prizes">
              ganarás increíbles premios
            </strong>{" "}
            y a la vez apoyarás a seguir creando felicidad ✨.
          </p>
          <Link to="/suscripcion">
            <Button>Quiero Suscribirme!</Button>
          </Link>
        </section>
      </div>
    </section>
  );
};
