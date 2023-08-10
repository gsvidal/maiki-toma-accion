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
        Nos dedicamos a llevar felicidad y un buen recuerdo a personas y
        animalitos de la calle 🐶🐱, llevamos comidas 🍝🍛, bebidas  y un mensaje de
        esperanza y motivación 💪.
      </h2>
      <h2>Si tú también quieres ser parte de este movimiento...</h2>
      <h3>Personas:</h3>
      <Link to="/suscripcion" className="link-button">
        <Button>Suscríbete</Button>
      </Link>

      <h3>¿Eres una empresa y nos quieres contactar?</h3>
      <h4>Escríbenos a tomaaccionwiu@gmail.com</h4>
    </>
  );
};
