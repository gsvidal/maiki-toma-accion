import "./Subscription.css";
import { Button } from "../Button/Button";
import { useEffect } from "react";

export const Subscription = () => {
  const embedCode =
    '<iframe width="482" height="858" src="https://www.youtube.com/embed/ebgQyd1b5aE" title="Todos tenemos una amiga así 🫣👀 #shorts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

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
              Increíbles premios exclusivos
            </strong>
            <span className="subs-icons">💻📱✈💰</span>
          </li>
          <li className="benefits-item">
            Platos preparados por mi (Maiki) con mensaje personalizado
            <span className="subs-icons">🍝🍛🍗</span>
          </li>
          <li className="benefits-item">
            Satisfacción de llevar ayuda al prójimo/mascota de la calle
            <span className="subs-icons">💜👴🐶🐱</span>
          </li>
          <li className="benefits-item">Y muchas otras cosas más...</li>
        </ol>
        {/* <p className="story">
          ¿Alguna vez llegaste a casa luego del trabajo y le dijiste a tu
          familia: "A que no sabes lo que me sucedio hoy{" "}
          <span className="subs-icons">🤩</span>!!".
        </p> */}
        {/* <p>
          Con tu suscripción estarás creando esos inolvidables momentos para
          esas personas y sus familias.
        </p> */}
        <p>
          Tú ya nos conoces, ahora te toca a ti!, gana con nosotros y a la vez ayudarás a llevar apoyo a más gente!
        </p>
        <h3 className="subs__step">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdU_tdx4VT4blgrBoEAQ8yYuVQPnnhEY4Hu9XLDUC5SP96_-A/viewform?usp=sf_link"
            rel="noopener"
            className="google-form"
            target="_blank"
          >
            Primer paso: Déjame tus datos{" "}
            <strong className="strong-red">aquí!</strong>
          </a>
        </h3>
        <h3>Segundo paso:</h3>
        <ul className="subs__step">
          <li>Costo de suscripción: S/8.90</li>
          <li>Habrá un sorteo principal y otro secundario cada mes.</li>
          <li>Asegúrate de mandar tu voucher al XXX por whatsapp.</li>
          <li>
            El día que envías el voucher contará como tu primer día, y
            participarás en el sorteo que esté agendado dentro de tu mes.
          </li>
          <li>
            Ejemplo: Si depositaste el día 03/08/2023 y lo envías ese mismo día
            al número XXX por whatsapp, participarás en el/los sorteos que hayan
            desde el día 04/08/2023 hasta el día 03/09/2023.
          </li>
          <li>
            Los sorteos son en VIVO por Tiktok y el ganador se elegirá esté o no
            en la transmisión.
          </li>
          <li>
            Al día siguiente se subirá a nuestro canal de Tiktok el video del
            sorteo.
          </li>
          <li>
            No hay ningún otro tipo de costo para los suscriptores, los
            ganadores recibirán sus premios a la puerta de su casa o a donde nos
            lo indiquen.
          </li>
        </ul>
        <div className="subs-banks subs__step">
          <p>Nombre: Antonieta Amasifuen</p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--bcp"></span>BCP<span>19343513977</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--bbva"></span> BBVA{" "}
            <span>0011016543231</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--ibk"></span>{" "}
            Interbank <span>514343513515</span>
          </p>
          <p className="subs-bank-item">
            <span className="subs-bank-icon subs-bank-icon--yape"></span>{" "}
            <span className="subs-bank-icon subs-bank-icon--plin"></span> <span>XXXXX</span>
          </p>
        </div>
        <p className="subs__step">
          Recuerda enviar tu voucher al XXXX por whatsapp!
        </p>
        <p>
          Y eso es todo!, nos vemos en el próximo sorteo{" "}
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
