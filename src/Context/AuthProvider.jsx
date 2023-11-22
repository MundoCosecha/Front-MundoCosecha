import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../Types/types";
import { useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const token = localStorage.getItem("token");

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


    const initialState = {
        logged: false,
        token: null,
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

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


    const estaLogueado = () => {

    }

    return (
        <AuthContext.Provider value={{
            state,
            login,
            register,
            logout,
            estaLogueado
        }}>
            {children}
        </AuthContext.Provider>
    )
}