import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import { useNavigate } from "react-router-dom"


export const CerrarSesion = () => {

    const navigate = useNavigate()

    const { logout } = useContext(AuthContext)

    const handleSignout = () => {
        logout()
        localStorage.removeItem("token")
        navigate("/")

    }
    return (
        <>
            <li>
                <button className="BtnCerrarSesion" onClick={handleSignout}>
                    <i className="ri-logout-box-r-fill"></i>
                    <span>Cerrar Sesión</span>
                </button>
            </li>
        </>
    )
}
