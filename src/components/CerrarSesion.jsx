import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"


export const CerrarSesion = () => {

    const { logout } = useContext(AuthContext)

    const handleSignout = () => {
        logout()
    }
    return (
        <>
            <li>

            </li>
            <li>
                <button className="BtnCerrarSesion" onClick={handleSignout}>
                    <i className="ri-logout-box-r-fill"></i>
                    <span>Cerrar Sesión</span>
                </button>
            </li>
        </>
    )
}
