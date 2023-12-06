
import { Link } from "react-router-dom";

export const NavbarGestion = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="logo">
            <span className="navbar-brand mb-0 h1 color-text-light">
              Mund<i className="ri-earth-line mundo"></i>Cosecha
            </span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/Gestion"}>Crear huerta</Link>
              <Link to={"/Calendar"}>Calendario</Link>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
