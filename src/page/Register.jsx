import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import React from 'react'



export const Register = () => {

    const [error, setError] = React.useState(false)

    const [user, setUser] = React.useState({
        user_name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email === "" || user.password === "" || user.user_name === "") {
            setError(true)
            return
        }
        setError(false)


        fetch("http://localhost:4000/auth/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        setTimeout(() => {
            window.location.href = "/";
        }, 50);
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
                    <h1>Crear cuenta</h1>
                    <p>¡Unete a nosotros!</p>
                    <Link to={'/'} >Volver al Incio</Link>
                    <form className="FromRL" id="register-form" onChange={handleChange} onSubmit={handleSubmit} >
                        <label htmlFor="user" className="sr-only">User</label>
                        <input type="text" name="user_name" id="user" placeholder="Nombre de usuario" />
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Correo electrónico" />
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" name="password" id="password" placeholder="Contraseña" />
                        <button type="submit">Crear cuenta</button>
                        <p className="error escondido">Error al registrarse</p>
                    </form>
                    <p>¿Ya estás registrado? - <Link to={'/Login'} >Iniciar sesión</Link> </p>
                    {error && <p>Todos los campos son obligatorios</p>}
                </div>
            </main>
        </div>

    )
}

