import { types } from "../Types/types";

// se crea el reducer para el manejo de la autenticacion
export const authReducer = (state, action) => {
    // se evalua el tipo de accion que se esta ejecutando
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        case types.LOGOUT:
            return {
                logged: false,
                token: null
            };
        case types.REGISTER:
            return {
                ...state,
                logged: true,
                token: action.payload.token
            };
        default:
            return state;
    }
}