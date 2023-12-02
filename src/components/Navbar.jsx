import '../Style/Navbar.css'
import { Link } from 'react-router-dom';
import { CerrarSesion } from './CerrarSesion';
import { LoginRegis } from './LoginRegis';
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';

export const Navbar = () => {



  const { state } = useContext(AuthContext)



  const menu = () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.classList.toggle("bx-x")
    navbar.classList.toggle("open")

  }

  return (
    <>
      <nav>
        <Link to={"/"} className="logo">
          <span>Mund<i className="ri-earth-line mundo"></i>Cosecha</span></Link>
        <ul className="navbar">
          <li>
            <Link to={'/'}><i className="ri-home-heart-fill"></i>Home</Link>
          </li>
          <li> 

          <div class="input-group mb-3">
  <button class="btn btn-outline-light " type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
          <i class='bx bx-food-menu 1rem'></i> Documentacion</button>
  <ul class="dropdown-menu bg-dark">
    <li><Link to={"/src/page/Document.jsx"} class="dropdown-item" href="#">Beneficios</Link></li>
    <li><Link to={"/src/page/TipoHuerta.jsx"} class="dropdown-item" href="#">Tipos de Huertas</Link></li>
    <li><Link to={"/src/page/CrearHuerta.jsx"} class="dropdown-item" href="#">Crea tu Huerta</Link></li>
    <li><Link to={"/src/page/Plagas.jsx"} class="dropdown-item" href="#">Plagas y Enfermedades</Link></li>
   
  </ul>

</div>

          </li>
         
          {state.logged && <li> <Link to={'/Gestion'}><i className='bx bx-task'></i>Gestion</Link> </li>}
          <li> <Link to={'/catalogo'}><i className="ri-store-2-fill"></i>Catalogo</Link> </li>
          {state.logged && < li > <Link to={'/Foro'}><i className="ri-store-2-fill"></i>Foro</Link> </li>}
          

        </ul>
        <div className="Users">
          {state.logged
            ? <CerrarSesion />
            : <LoginRegis />}

          <div className="bx bx-menu" id="menu-icon" onClick={menu}></div>
        </div>
      </nav >
    </>
  )
}