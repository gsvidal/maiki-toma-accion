import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./NotFound.css";

export const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Esta página no existe :&#40;</h1>{" "}
      <Link to="/" className="link-button">
        <Button>Página Principal</Button>
      </Link>
    </section>
  );
};
