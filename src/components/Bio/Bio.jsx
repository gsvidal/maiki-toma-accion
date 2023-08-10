import "./Bio.css";
import Maiki from "../../assets/maiki-bio-trans.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const Bio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { inView, ref } = useInView({
    threshold: 0,
  });

  console.log(inView);

  return (
    <section className="bio">
      <div className="maiki-figure" ref={ref}>
        <span
          className={`bg-name-trans bg-name-trans--1 ${inView ? "show" : ""}`}
        >
          <p className="bg-name-text bg-name-text--1">Toma Acción</p>
        </span>
        <span
          className={`bg-name-trans bg-name-trans--2 ${inView ? "show" : ""}`}
        >
          <p className="bg-name-text bg-name-text--2">Maiki</p>
        </span>
        <img src={Maiki} alt="Maiki de Toma Acción" className="bio__img" />

        <span className="maiki-blob"></span>
      </div>
      <div className="bio__copy">
        <section className="copy copy--1">
          <p>Seguro me conoces como la chica que dice:</p>
          <p className="copy--1-title">"Mami, comidita 🍛?"</p>
          <p className="copy--1-title">"Papi, te quiero invitar comida 🍝!"</p>
          <p className="copy--1-subtitle">
            Hola soy <strong>Maiki de Toma Acción</strong> y te invito hoy a que
            seas parte de mi comunidad 💪
          </p>
          <p>
            Todo empezó hace un año, cuando decidí crear contenido, pero quería
            que sea algo diferente, entretenido pero que también nos emocione ❤
            y nos devuelva la esperanza en las personas.
          </p>

          <p>
            Te cuento un poco de mí, nacida en la Amazonía peruana 🐍🌴,
            contadora 👩‍💼de profesión, emprendedora y voluntaria desde hace
            muchísimos años.
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
          <Link to="/suscripcion" className="link-button">
            <Button>Quiero Suscribirme!</Button>
          </Link>
        </section>
      </div>
    </section>
  );
};
