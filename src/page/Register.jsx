import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'



export const Register = () => {
    const navigate = useNavigate();

    const { register } = useContext(AuthContext)

    const [error, setError] = useState(false)
    const [errors, setErrors] = useState(false)

    const [user, setUser] = useState({
        user_name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (user.email === "" || user.password === "" || user.user_name === "") {
            setError(true)
            setErrors(false)
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

        if (res === 200) {
            // se obtiene la respuesta del servidor
            const data = await res.json();
            // se envia la respuesta al context
            register(data);
            navigate("/");
        } else {
            setErrors(true)
        }
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
                    {errors && <p>No se puedo Resistrar</p>}
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

