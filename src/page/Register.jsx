import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'



export const Register = () => {

    const [error, setError] = useState(false)

    const [user, setUser] = useState({
        user_name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email === "" || user.password === "" || user.user_name === "") {
            setError(true)
            return
        } else {
            setError(false)
        }

        fetch("http://localhost:4000/auth/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(res => res.json()).then((cred) => {
            if (cred.error) {
                alert("Error al crear la cuenta")
                return
            }
            localStorage.setItem("token", JSON.stringify(cred.token)) // Guardo el token en el localStorage
            localStorage.setItem("user", JSON.stringify(cred.user.user_name))
            Navigate("/")
        })
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
                    </form>
                    <p>¿Ya estás registrado? - <Link to={'/Login'} >Iniciar sesión</Link> </p>
                    {error && <p>Todos los campos son obligatorios</p>}
                </div>
            </main>
        </div>

    )
}

