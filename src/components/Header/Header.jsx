import { Link } from "react-router-dom";
import "./Header.css";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/toma-accion-logo.png";
import { useEffect, useState } from "react";

export const Header = () => {
  const location = useLocation();
  const link = location.pathname;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <img src={Logo} alt="Toma Accion logo" width="70" height="70" className="header__logo"/>
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
        </button>
        <div className={`menu-bg ${isMobileMenuOpen ? "open" : ""}`}></div>
        <nav className={`menu ${isMobileMenuOpen ? "open" : "close"}`}>
          <ul className={`nav__links ${isMobileMenuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/suscripcion"
                onClick={toggleMobileMenu}
                className={`nav__item ${link === "/suscripcion" && "clicked"}`}
              >
                Suscríbete!
              </Link>
            </li>
            <li>
              <Link
                to="/maiki"
                onClick={toggleMobileMenu}
                className={`nav__item ${link === "/maiki" && "clicked"}`}
              >
                Quien es Maiki
              </Link>
            </li>
            <li>
              <Link
                to="/contacto"
                onClick={toggleMobileMenu}
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
