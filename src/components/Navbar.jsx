import "../Style/Navbar.css";
import { Link } from "react-router-dom";
import { CerrarSesion } from "./CerrarSesion";
import { LoginRegis } from "./LoginRegis";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

export const Navbar = () => {
  const { state } = useContext(AuthContext);

  const menu = () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
  };

  return (
    <>
      <nav>
        <Link to={"/"} className="logo">
          <span>
            Mund<i className="ri-earth-line mundo"></i>Cosecha
          </span>
        </Link>
        <ul className="navbar">
          <li>
            <Link to={"/"}>
              <i className="ri-home-heart-fill"></i>Home
            </Link>
          </li>
          <li>
            <div className="input-group">
              <button
                className="btn btn-outline-light dropdown-toggle "
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Documentacion
              </button>
              <ul className="dropdown-menu bg-dark">
                <li>
                  <Link to={"/Documentacion"} className="dropdown-item" href="#">
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link to={"/TipoHuerta"} className="dropdown-item" href="#">
                    Tipos de Huertas
                  </Link>
                </li>
                <li>
                  <Link to={"/CrearHuerta"} className="dropdown-item" href="#">
                    Crea tu Huerta
                  </Link>
                </li>
                <li>
                  <Link to={"/Plagas"} className="dropdown-item" href="#">
                    Plagas y Enfermedades
                  </Link>
                </li>
                <li>
                  <Link to={"/Compost"} className="dropdown-item" href="#">
                    Compost
                  </Link>
                </li>
              </ul>
            </div>{" "}
          </li>
          {state.logged && (
            <li>
              {" "}
              <Link to={"/Gestion"}>
                <i className="bx bx-task"></i>Gestion
              </Link>{" "}
            </li>
          )}
          <li>
            {" "}
            <Link to={"/catalogo"}>
              <i className="ri-store-2-fill"></i>Catalogo
            </Link>{" "}
          </li>
        </ul>
        <div className="Users">
          {state.logged ? <CerrarSesion /> : <LoginRegis />}

          <div className="bx bx-menu" id="menu-icon" onClick={menu}></div>
        </div>
      </nav>
    </>
  );
};
