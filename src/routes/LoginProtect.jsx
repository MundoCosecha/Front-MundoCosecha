import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export const LoginProtect = () => {
    const [isLogged, setIsLogged] = useState(false);

    const token = localStorage.getItem("token");

    if (!token) {
        setIsLogged(false);
    } else {
        setIsLogged(true);
    }

    return (
        <>
            {isLogged ? <Outlet /> : <Navigate to="/login" />}
        </>
    );

}