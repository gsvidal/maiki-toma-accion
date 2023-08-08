import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <>
      <header>
        <img
          src="https://i.postimg.cc/7YgBjWpy/toma-accion-logo.png"
          alt="Toma Accion logo"
          width="60"
          height="60"
        />
        <nav>
          <ul>
            <li>
              <Link to="/suscripcion">Suscríbete!</Link>
            </li>
            <li>
              <Link to="/maiki">Quien es Maiki</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
