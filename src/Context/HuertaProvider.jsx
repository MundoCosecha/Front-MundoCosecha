import { useEffect, createContext, useState } from "react";
import { huertaReducer } from "./huertaReducer";
import { useReducer } from "react";



export const HuertaContext = createContext();

export const HuertaProvider = ({ children }) => {
    const initialState = {
        huertas: []
    }
    const [state, dispatch] = useReducer(huertaReducer, initialState);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:4000/api/huertas", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const fetchedData = await res.json();
                setHuerta(fetchedData);
            } catch (error) {
                console.error("Error al obtener datos:", error);
            }
        }
        fetchData();
    }, []);

    const actualizarHuerta = () => {
        const huertas = {};//aca traes las info de tus huertas
        dispatch({
            type: 'ACTUALIZAR_HUERTA',
            payload: huertas
        })
    }

    return (
        <HuertaContext.Provider value={{
            huertas: state.huertas,
            actualizarHuerta
        }}>
            {children}
        </HuertaContext.Provider>
    );
}