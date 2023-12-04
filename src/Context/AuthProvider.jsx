import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../Types/types";
import { useEffect } from "react";

// se crea el context
export const AuthContext = createContext();


// se crea el provider
export const AuthProvider = ({ children }) => {

    // se obtiene el token del localstorage
    const token = localStorage.getItem("token");

    // se crea el efecto para validar el token
    useEffect(() => {
        if (token) {
            dispatch({
                type: types.LOGIN,
                payload: {
                    logged: true,
                    token
                }
            })
        }
    }, [token])

    // se crea el estado inicial
    const initialState = {
        logged: false,
        token: null,
    }

    // se crea el reducer
    const [state, dispatch] = useReducer(authReducer, initialState);

    // se crean las funciones para el login, logout y register
    const login = (payload) => {
        dispatch({
            type: types.LOGIN,
            payload
        })
    }

    const logout = () => {
        dispatch({
            type: types.LOGOUT
        })
    }

    const register = (payload) => {
        dispatch({
            type: types.REGISTER,
            payload
        })
    }


    return (
        <AuthContext.Provider value={{
            state,
            login,
            register,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}