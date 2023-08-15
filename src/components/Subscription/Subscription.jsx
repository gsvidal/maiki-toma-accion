import "./Subscription.css";
import { Button } from "../Button/Button";
import { useEffect } from "react";

export const Subscription = () => {
  const embedCode =
    '<iframe width="498" height="886" src="https://www.youtube.com/embed/SYTKtG852PA" title="Suscríbete y haz la diferencia ☺️!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="subscription">
      <section className="subs-copy">
        <h3>
          Beneficios que obtienes al suscribirte{" "}
          <span className="subs-icons">⭐</span>:
        </h3>
        <ol className="benefits-list">
          <li className="benefits-item">
            <strong className="strong-red">
              Premiazos exclusivos que te dejarán boquiabierto
            </strong>
            <span className="subs-icons">🎧🎮💻📱✈💰</span>
          </li>
          <li className="benefits-item">
            Platillos cocinados por mí (Maiki) con cariño y un mensaje de mi
            corazón
            <span className="subs-icons">🍝🍛🍗</span>
          </li>
          <li className="benefits-item">
            La sensación increíble de dar una mano al prójimo y a los peludos
            callejeros
            <span className="subs-icons">💜👴🐶🐱</span>
          </li>
          <li className="benefits-item">
            ¡Y espera, hay más...! <span className="subs-icons">😉</span>
          </li>
        </ol>
        {/* <p>
          ¡Ya nos conoces, ahora te toca a ti! Únete a nosotros para ganar y al
          mismo tiempo contribuir a llevar apoyo a quienes más lo necesitan.
        </p> */}
        <h3>Primer paso:</h3>
        <h3 className="subs__step">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdU_tdx4VT4blgrBoEAQ8yYuVQPnnhEY4Hu9XLDUC5SP96_-A/viewform?usp=sf_link"
            rel="noopener"
            className="google-form"
            target="_blank"
          >
            Llena tus datos <strong className="strong-red">aquí mismo!</strong>
          </a>
        </h3>
        <h3>Segundo paso:</h3>
        <ul className="subs__step">
          <li>Costo de suscripción: S/8.90</li>
          <li>Cada mes, habrá un sorteo principal y otro secundario.</li>
          <li>
            Asegúrate de enviar tu comprobante de pago al 906191636 a través de
            WhatsApp.
          </li>
          <li>
            El día en que envíes el comprobante se considerará como tu primer
            día de participación, y estarás incluido en el sorteo programado
            para ese mes.
          </li>
          <li>
            Ejemplo: Si realizaste el depósito el 03/08/2023 y lo envías el
            mismo día al 906191636 a través de WhatsApp, participarás en el/los
            sorteos programados desde el 04/08/2023 hasta el 03/09/2023.
          </li>
          <li>
            Los sorteos se transmitirán en vivo a través de TikTok y el ganador
            será elegido sin importar si está o no en la transmisión.
          </li>
          <li>
            Al día siguiente, publicaremos en nuestro canal de TikTok el video
            del sorteo.
          </li>
          <li>
            No habrá ningún otro costo para los suscriptores y los ganadores
            recibirán sus premios en la comodidad de su hogar o en la dirección
            que nos proporcionen.
          </li>
        </ul>
        <div className="subs__step subs-banks">
          <p>Nombre: Antonieta Amasifuen</p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--bcp"></span>BCP
            <span>19406556504030</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--bbva"></span> BBVA{" "}
            <span>001108140247256305</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--ibk"></span>{" "}
            Interbank <span>8983379998030</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--yape"></span>{" "}
            <span className="subs-bank-icon subs-bank-icon--plin"></span>{" "}
            <span>906191636</span>
          </p>
        </div>
        <h3>Tercer y último paso:</h3>
        <p className="subs__step ">
          <strong className="strong-red">Importante:</strong> Recuerda enviar tu
          comprobante de pago por WhatsApp al 906191636.
        </p>
        <p>
          Y eso es todo, ¡nos vemos en el próximo sorteo!{" "}
          <span className="subs-icons">😊</span>
        </p>
        <article className="bank-data"></article>
      </section>
      <section className="maiki-video">
        <div dangerouslySetInnerHTML={{ __html: embedCode }} />
      </section>
    </section>
  );
};
