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
          <li> <Link to={'/Documento'}> <i className='ri-file-text-fill'></i> Documentanción</Link> </li>
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