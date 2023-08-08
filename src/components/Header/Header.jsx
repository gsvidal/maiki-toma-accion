export const Header = ({ setPage }) => {
  const handlePage = (event) => {
    setPage(event.target.id);
  };
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
          <ul onClick={handlePage}>
            <li id="subscribe">Suscríbete!</li>
            <li id="bio">Quien es Maiki</li>
            <li id="contact">Contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
