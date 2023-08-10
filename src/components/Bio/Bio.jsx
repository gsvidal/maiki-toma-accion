import "./Bio.css";
import Maiki from "../../assets/maiki-bio-trans.png";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSound from "use-sound";
import mamitaMp3 from "../../assets/mamita.mp3";
import papitoMp3 from "../../assets/papito.mp3";

export const Bio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { inView, ref } = useInView({
    threshold: 0,
  });

  const [play] = useSound(mamitaMp3);
  console.log(useSound(mamitaMp3))
  const [play2] = useSound(papitoMp3);

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
          <p>Seguro que me conoces como la chica que dice:</p>
          <p className="copy--1-title">
            "Mami, comidita 🍛?"
            <span className="sound-icon sound-icon--mami" onClick={play}></span>
          </p>
          <p className="copy--1-title">
            "Papi, te quiero invitar comida 🍝!"
            <span className="sound-icon sound-icon--papi" onClick={play2}></span>
          </p>
          <p className="copy--1-subtitle">
            Hola soy <strong>Maiki de Toma Acción</strong> y hoy te invito a ser
            parte de mi comunidad 💪
          </p>
          <p>
            Todo comenzó hace un año, cuando decidí crear contenido, pero quería
            que fuera algo diferente, entretenido y que también nos llenara de
            emoción ❤, devolviéndonos la esperanza en las personas.
          </p>

          <p>
            Te cuento un poco de mí. Nací en la Amazonía peruana 🐍🌴, soy
            contadora de profesión 👩‍💼, emprendedora y voluntaria desde hace
            muchísimos años.
          </p>
          <p>
            El lema que rige mi vida es: "Inspirar a otros para hacer el bien."{" "}
          </p>
        </section>

        <section className="copy copy--2">
          <p>
            Con tu suscripción, no solo <span className="prize-icons"></span>
            <strong className="strong-red prizes">
              ganarás increíbles premios
            </strong>{" "}
            sino que también estarás contribuyendo a seguir creando momentos de
            felicidad✨.
          </p>
          <p>¡Estoy emocionada por tenerte a bordo!</p>
          <Link to="/suscripcion" className="link-button">
            <Button>Quiero Suscribirme!</Button>
          </Link>
        </section>
      </div>
    </section>
  );
};
