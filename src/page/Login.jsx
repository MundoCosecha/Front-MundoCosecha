import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'



export const Login = () => {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext)

    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        email: "",
        password: ""
    })






    const handleSubmit = async (e) => {
        e.preventDefault()

        if (user.email === "" || user.password === "") {
            setError(true)
            return
        } else {
            setError(false)
        }
        const res = await fetch("http://localhost:4000/auth/inicioSesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        const data = await res.json();
        login(data);

        localStorage.setItem("token", data.token) // Guardo el token en el localStorage

        navigate("/");

    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='body'>
            <main className='MainRL'>
                <div className="form-container">
                    <h1>Iniciar sesión</h1>
                    <p>¡Que bueno que estes devuelta!</p>
                    <Link to={'/'} >Volver al Incio</Link>
                    <form className="FromRL" id="login-form" onChange={handleChange} onSubmit={handleSubmit}>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="text" name="email" id="user" placeholder="Correo electronico" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" />
                        <button type="submit"
                        >Iniciar sesión</button>
                        <p className="error escondido">Error al iniciar sesión</p>
                    </form>
                    <p>¿Todavía no tenés una cuenta? - <Link to={'/registro'}>Registrate</Link></p>
                    {error && <p>Todos los campos son obligatorios</p>}
                </div>
            </main>
        </div>
    )
}
