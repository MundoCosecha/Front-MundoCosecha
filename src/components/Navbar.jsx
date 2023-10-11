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
      <a href="#" className="logo"
      ><span>Mund<i className="ri-earth-line mundo"></i>Cosecha</span></a>
      <ul className="navbar">
        <li>
          <a href="#" className="active"
          ><i className="ri-home-heart-fill"></i>Home</a>
        </li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">service</a></li>
        <li><a href="#">blog</a></li>
      </ul>
      <div className="Users">
        <Link to={'/Login'} className="user" ><i className="ri-user-2-fill"></i><span>Sign In</span></Link>
        <Link to={'/Registro'} className="user" >
          <i className="ri-user-add-fill"></i><span>Register</span></Link>
        <div className="bx bx-menu" id="menu-icon" onClick={menu}></div>
      </div>
    </nav>
  )
}