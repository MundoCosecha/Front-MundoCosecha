import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import React from 'react'

export const Login = () => {

    const [user, setUser] = React.useState({
        user: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='body'>
            <main>
                <div className="form-container">
                    <h1>Iniciar sesión</h1>
                    <p>¡Que bueno que estes devuelta!</p>
                    <Link to={'/'} >Volver al Incio</Link>
                    <form className="FromRL" id="login-form" onChange={handleChange} onSubmit={handleSubmit}>
                        <label htmlFor="user" className="sr-only">User</label>
                        <input type="text" name="user" id="user" placeholder="Nombre de usuario" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" />
                        <button type="submit"
                        >Iniciar sesión</button>
                        <p className="error escondido">Error al iniciar sesión</p>
                    </form>
                    <p>¿Todavía no tenés una cuenta? - <Link to={'/registro'}>Registrate</Link></p>
                </div>
            </main>
        </div>
    )
}
