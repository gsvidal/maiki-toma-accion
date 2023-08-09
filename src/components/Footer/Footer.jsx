import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p>Puedes encontrarnos en:</p>
        <ul className="social__links">
          <li className="social__item">
            <a
              href="https://www.tiktok.com/@tomaccion"
              rel="noopener"
              target="_blank"
            >
              <span className="social__logo social__logo--tiktok"></span>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.instagram.com/maikitomaaccion/"
              rel="noopener"
              target="_blank"
            >
              <span className="social__logo social__logo--ig"></span>
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.youtube.com/@toma-accion"
              rel="noopener"
              target="_blank"
            >
              <span className="social__logo social__logo--yt"></span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
