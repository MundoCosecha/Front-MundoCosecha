import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'



export const Login = () => {

    // se crea la funcion para navegar entre paginas
    const navigate = useNavigate();

    // se obtiene el login del context
    const { login } = useContext(AuthContext)

    // se crean los estados para los errores
    const [errors, setErrors] = useState(false)

    // se crean los estados para los errores de Login
    const [errorLogin, setErrorLogin] = useState(false)

    // se crea el estado para el usuario
    const [user, setUser] = useState({
        email: "",
        password: ""
    })



    // se crea la funcion para enviar los datos al servidor
    const handleSubmit = async (e) => {
        // se previene el comportamiento por defecto
        e.preventDefault()

        // se valida que los campos no esten vacios
        if (user.email === "" || user.password === "") {
            // se cambia el estado del error
            setErrors(true)
            // se cambia el estado del error de login
            setErrorLogin(false)
            return
        } else {
            // se cambia el estado del error
            setErrors(false)
        }
        // se envian los datos al servidor
        const res = await fetch("http://localhost:4000/auth/inicioSesion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        // se valida la respuesta del servidor
        if (res === 200) {
            // se obtiene la respuesta del servidor
            const data = await res.json();
            // se envia la respuesta al context
            login(data);
            // se navega a la pagina de inicio
            navigate("/");
        } else {
            // se cambia el estado del error de login
            setErrorLogin(true)
        }
    }

    // se crea la funcion para cambiar el estado del usuario
    const handleChange = (e) => {
        // se cambia el estado del usuario
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
                    {errorLogin && <p>El usuario o la contraseña son incorrectos</p>}
                    <form className="FromRL" id="login-form" onChange={handleChange} onSubmit={handleSubmit}>
                        <label htmlFor="email" className="sr-only" >Email</label>
                        <input type="text" name="email" id="user" placeholder="Correo electronico" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" />
                        <button type="submit"
                        >Iniciar sesión</button>
                        <p className="error escondido">Error al iniciar sesión</p>
                    </form>
                    <p>¿Todavía no tenés una cuenta? - <Link to={'/registro'}>Registrate</Link></p>
                    {errors && <p>Todos los campos son obligatorios</p>}
                </div>
            </main>
        </div>
    )
}
