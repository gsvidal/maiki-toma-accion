import { useEffect } from "react";
import { Button } from "../Button/Button";
import "./Contact.css";
import { Link } from "react-router-dom";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h1>
        Toma <span className="word-bg">Acción</span>
      </h1>
      <h2>
        Nuestra misión es llevar felicidad y dejar hermosos recuerdos en la vida
        de personas y animalitos de la calle 🐶🐱. Brindamos comidas 🍝🍛,
        bebidas y mensajes llenos de esperanza y motivación 💪.
      </h2>
      <h2>¿Te gustaría unirte a este movimiento?</h2>
      <h3>Personas:</h3>
      <Link to="/suscripcion" className="link-button">
        <Button>Suscríbete</Button>
      </Link>

      <h3>¿Eres una empresa y deseas ponerte en contacto con nosotros?</h3>
      <h4>Escríbenos a tomaaccionwiu@gmail.com</h4>
    </>
  );
};
