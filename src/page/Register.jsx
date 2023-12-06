import '../Style/Usuario.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'



export const Register = () => {

    // se crea la funcion para navegar entre paginas
    const navigate = useNavigate();

    // se obtiene el register del context
    const { register } = useContext(AuthContext)

    // se crean los estados para los errores
    const [error, setError] = useState(false)

    // se crean los estados para los errores de Register
    const [errorsRegister, setErrorsRegister] = useState(false)

    // se crea el estado para el usuario
    const [user, setUser] = useState({
        user_name: "",
        email: "",
        password: ""
    })

    // se crea la funcion para enviar los datos al servidor
    const handleSubmit = async (e) => {
        e.preventDefault()
        // se valida que los campos no esten vacios
        if (user.email === "" || user.password === "" || user.user_name === "") {
            // se cambia el estado del error
            setError(true)
            // se cambia el estado del error de register
            setErrorsRegister(false)
            return
        } else {
            // se cambia el estado del error
            setError(false)
        }

        // se envian los datos al servidor
        const res = await fetch("http://localhost:4000/auth/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        // se valida la respuesta del servidor
        if (res.status === 200 || res.status === 201) {
            // se obtiene la respuesta del servidor
            const data = await res.json();
            // se envia la respuesta al context
            console.log(data);
            register(data);
            localStorage.setItem("userId", JSON.stringify({ userId: data.new_user.id }));
            localStorage.setItem("token", data.token);
            // se navega a la pagina de inicio
            navigate("/");
        } else {
            // se cambia el estado del error de register
            setErrorsRegister(true)

        }
    }

    // se crea la funcion para obtener los datos del formulario
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
                    <h1>Crear cuenta</h1>
                    <p>¡Unete a nosotros!</p>
                    <Link to={'/'} >Volver al Incio</Link>
                    {errorsRegister && <p>No se puedo Resistrar</p>}
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

