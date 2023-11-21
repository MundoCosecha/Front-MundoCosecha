
export const CerrarSesion = () => {
    const handleSignout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.href = "/"
    }
    return (
        <>
            <li>
                {`${JSON.parse(localStorage.getItem("user")).user_name}`}
            </li>
            <li>
                <button onClick={handleSignout}>
                    <i className="ri-logout-box-r-fill"></i>
                    <span>Cerrar Sesión</span>
                </button>
            </li>
        </>
    )
}
