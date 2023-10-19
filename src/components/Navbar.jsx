import '../Style/Navbar.css'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const menu = () => {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.classList.toggle("bx-x")
    navbar.classList.toggle("open")

  }

  return (
    <nav>
      <Link to={"/"}>
        <a href="#" className="logo"
        ><span>Mund<i className="ri-earth-line mundo"></i>Cosecha</span></a></Link>
      <ul className="navbar">
        <li>
          <Link to={'/'}><i className="ri-home-heart-fill"></i>Home</Link>
        </li>
        <li> <Link> <i className='ri-file-text-fill'></i> Documentanción</Link> </li>
        <li> <Link to={'/Gestion'}><i className='bx bx-task'></i>Gestion</Link> </li>
        <li> <Link to={'/catalogo'}><i className="ri-store-2-fill"></i>Catalogo</Link> </li>
      </ul>
      <div className="Users">
        <Link to={'/login'} className="user" ><i className="ri-user-2-fill"></i><span>Sign In</span></Link>
        <Link to={'/registro'} className="user" >
          <i className="ri-user-add-fill"></i><span>Register</span></Link>
        <div className="bx bx-menu" id="menu-icon" onClick={menu}></div>
      </div>
    </nav>
  )
}