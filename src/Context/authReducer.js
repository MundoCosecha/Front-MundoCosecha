import { types } from "../Types/types";

// se crea el reducer para el manejo de la autenticacion
export const authReducer = (state, action) => {
    // se evalua el tipo de accion que se esta ejecutando
    switch (action.type) {
        case types.LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        case types.LOGOUT:
            localStorage.removeItem('token');
            return {
                logged: false
            };
        case types.REGISTER:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        default:
            return state;
    }
}