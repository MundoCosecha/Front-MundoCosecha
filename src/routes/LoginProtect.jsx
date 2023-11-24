import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


export const LoginProtect = () => {

    // se obtiene el state del context
    const { state } = useContext(AuthContext);

    return (
        <>
            {state.logged ? <Outlet /> : <Navigate to="/login" />}
        </>
    );

}