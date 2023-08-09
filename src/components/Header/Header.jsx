import { Link } from "react-router-dom";
import "./Header.css";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/toma-accion-logo.png";

export const Header = () => {
  const location = useLocation();
  const link = location.pathname;

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Toma Accion logo" width="70" height="70" />
        <nav>
          <ul className="nav__links">
            <li>
              <Link
                to="/suscripcion"
                className={`nav__item ${link === "/suscripcion" && "clicked"}`}
              >
                Suscríbete!
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/maiki"
                className={`nav__item ${link === "/maiki" && "clicked"}`}
              >
                Quien es Maiki
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                className={`nav__item ${link === "/contacto" && "clicked"}`}
              >
                Toma Acción
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
