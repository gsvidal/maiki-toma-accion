import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

export const NotFound = () => {
  return (
    <>
      <h1>Esta página no existe :&#40;</h1>
      <Button>
        {" "}
        <Link to="/" className="link-button">Página Principal</Link>
      </Button>
    </>
  );
};
